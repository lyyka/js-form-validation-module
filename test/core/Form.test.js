import { assert, expect, use } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { JSDOM } from 'jsdom';
import Form from '../../src/core/Form';
import {rules} from '../../src/components/validationRulesGenerators';
use(sinonChai);

const dom = new JSDOM(
    `<div>
        <form id="form">
            <input 
                id="test-input"
                class="should-be-included"
                type="text"
                name="test"
                value="Test input value"
                placeholder="Test input field"
            />
            <input 
                id="test-input-disabled"
                type="text"
                name="test-disabled"
                placeholder="Validation disabled on this field"
                data-disable-validation
            />

            <input 
                id="test-checkbox-1"
                type="checkbox"
                name="test-checkbox"
                value="a"
            />
            <input 
                id="test-checkbox-2"
                class="should-be-included"
                type="checkbox"
                name="test-checkbox"
                value="b"
                checked
            />

            <input 
                id="test-radio-1"
                class="should-be-included"
                type="radio"
                name="test-radio"
                checked
                value="c"
            />
            <input 
                id="test-radio-2"
                type="radio"
                name="test-radio"
                value="d"
            />
        </form>
    </div>`
);

global.window = dom.window;
global.document = dom.window.document;

describe('Test core Form class', () => {
    it('Should contain valid default values', () => {
        const formHtml = document.querySelector('#form');
        const form = new Form(formHtml);

        assert.equal(form.form, formHtml);
        assert.isEmpty(form.validationRules);
        assert.isEmpty(form.options);
        assert.isEmpty(form.fields);
        assert.isTrue(form.isValid);
    });

    describe('Form html element getter', () => {
        const formHtml = document.querySelector('#form');
        const form = new Form(formHtml);

        it('Should return correct html element', () => {
            assert.equal(form.getHtmlElement(), formHtml);
        });
    });

    describe('Html fields getter', () => {
        const formHtml = document.querySelector('#form');
        const form = new Form(formHtml);

        it('Should return correct fields', () => {
            const fields = form.getHtmlFields();
            const shouldExist = document.querySelectorAll('should-be-included');

            shouldExist.forEach(f => {
                assert.isTrue(fields.includes(f));
            });
        });
    });

    describe('Validation', () => {
        const formHtml = document.querySelector('#form');
        const form = new Form(formHtml);

        it('Should not return field as valid if no validation defined for that field', () => {
            const validationRules = {
                'test-checkbox': [rules.required(), rules.in(['a', 'b'])],
                'test-radio': [rules.required(), rules.in(['c','d'])],
            };

            form.initialize(validationRules);

            const {validFields} = form.validate();

            assert.isArray(validFields);
            expect(validFields.length).to.be.equal(2);
        });

        it('Should validate correctly when all fields are valid', () => {
            sinon.spy(form, 'handleCallbacksAfterValidation');

            const validationRules = {
                'test': [rules.required()],
                'test-checkbox': [rules.required(), rules.in(['a', 'b'])],
                'test-radio': [rules.required(), rules.in(['c','d'])],
            };

            form.initialize(validationRules);

            form.fields.forEach(f => {
                sinon.spy(f, 'reset');
                sinon.spy(f, 'validate');
            });

            const {validFields, isValid} = form.validate();

            assert.isArray(validFields);
            assert.isBoolean(isValid);
            expect(isValid).to.be.true;
            expect(validFields.length).to.be.equal(3);

            form.fields.forEach(f => {
                expect(f.reset).to.be.calledOnce;
                expect(f.validate).to.be.calledOnce;
            });

            expect(form.handleCallbacksAfterValidation).to.be.calledOnce;
            sinon.restore();
        });

        it('Should validate correctly with invalid field', () => {
            sinon.spy(form, 'handleCallbacksAfterValidation');

            const validationRules = {
                'test': [rules.required()],
                'test-checkbox': [rules.required(), rules.in(['a', 'b'])],
                'test-radio': [rules.required(), rules.in(['c','d'])],
            };

            // Invalidate this field
            form.getHtmlElement().querySelector('#test-input').value = '';

            form.initialize(validationRules);

            form.fields.forEach(f => {
                sinon.spy(f, 'reset');
                sinon.spy(f, 'validate');
            });

            const {validFields, isValid} = form.validate();

            assert.isArray(validFields);
            assert.isBoolean(isValid);
            expect(isValid).to.be.false;
            expect(validFields.length).to.be.equal(2);

            form.fields.forEach(f => {
                expect(f.reset).to.be.calledOnce;
                expect(f.validate).to.be.calledOnce;
            });

            expect(form.handleCallbacksAfterValidation).to.be.calledOnce;
            sinon.restore();
        });
    });

    describe('Initialization', () => {
        const formHtml = document.querySelector('#form');

        it('Should properly override all options', () => {
            const form = new Form(formHtml);

            const options = {
                validationMessages: {
                    test: {
                        required: 'Test is required',
                    }
                },
                invalidClass: 'my-custom-invalid-class',
                validClass: 'my-custom-valid-class',
                live: false,
                silent: true,
                validationMessageColor: 'orange',
            };

            form.initialize({}, options);

            Object.keys(options).forEach(key => {
                assert.equal(form.options[key], options[key]);
            });
        });

        it('Should properly initialize all validation rules and fields', () => {
            const form = new Form(formHtml);

            const validationRules = {
                'test': [rules.required()],
                'test-checkbox': [rules.required(), rules.in(['a', 'b'])],
                'test-radio': [rules.required(), rules.in(['c','d'])],
            };

            const f = form.initialize(validationRules);

            expect(f).to.be.instanceOf(Form);

            assert.equal(form.validationRules, validationRules);
            
            const shouldHaveBeenInitialized = document.querySelectorAll('.should-be-included');

            expect(form.fields.length).to.be.equal(shouldHaveBeenInitialized.length);
        });

        it('Should reset fields array on each initialization call', () => {
            const form = new Form(formHtml);
            form.initialize({});
            
            const shouldHaveBeenInitialized = document.querySelectorAll('.should-be-included');

            expect(form.fields.length).to.be.equal(shouldHaveBeenInitialized.length);

            form.initialize({});

            expect(form.fields.length).to.be.equal(shouldHaveBeenInitialized.length);
        });
    });

    describe('Revalidation', () => {
        const formHtml = document.querySelector('#form');
        const form = new Form(formHtml);

        it('Should be valid for zero fields', () => {
            sinon.spy(form, 'handleCallbacksAfterValidation');

            assert.isEmpty(form.fields);
            form.revalidate();
            assert.isTrue(form.isValid);

            expect(form.handleCallbacksAfterValidation).to.be.calledOnce;

            sinon.restore();
        });

        it('Should be valid when all fields are valid', () => {
            sinon.spy(form, 'handleCallbacksAfterValidation');

            form.initialize({});
            expect(form.fields.length).to.be.equal(3);

            form.fields[0].isValid = true;
            form.fields[1].isValid = true;

            form.revalidate();

            assert.isTrue(form.isValid);

            expect(form.handleCallbacksAfterValidation).to.be.calledOnce;

            sinon.restore();
        });

        it('Should break on first invalid field', () => {
            sinon.spy(form, 'handleCallbacksAfterValidation');

            form.initialize({});
            expect(form.fields.length).to.be.equal(3);

            form.fields[0].isValid = false;
            form.fields[1].isValid = true;

            form.revalidate();

            assert.isFalse(form.isValid);

            expect(form.handleCallbacksAfterValidation).to.be.calledOnce;

            sinon.restore();
        });
    });

    describe('On valid callback setter', () => {
        const formHtml = document.querySelector('#form');
        const form = new Form(formHtml);

        it('Should correctly set callback', () => {
            const cb = () => { console.log('Hello world!'); };
            const f = form.onValid(cb);
            expect(f).to.be.instanceOf(Form);
            assert.equal(f.onValidCallback, cb);
        });
    });

    describe('On invalid callback setter', () => {
        const formHtml = document.querySelector('#form');
        const form = new Form(formHtml);

        it('Should correctly set callback', () => {
            const cb = () => { console.log('Hello world!'); };
            const f = form.onInvalid(cb);
            expect(f).to.be.instanceOf(Form);
            assert.equal(f.onInvalidCallback, cb);
        });
    });

    describe('Will correctly handle callbacks after validation', () => {
        const formHtml = document.querySelector('#form');
        const form = new Form(formHtml);
        const validCb = () => {
            console.log('valid');
        };
        const invalidCb = () => {
            console.log('invalid');
        };
        form.onValid(validCb).onInvalid(invalidCb);

        beforeEach(() => {
            sinon.spy(form, 'onValidCallback');
            sinon.spy(form, 'onInvalidCallback');
        });

        afterEach(() => {
            sinon.restore();
        });

        it('Should call valid callback if form is valid', () => {
            form.isValid = true;
            form.handleCallbacksAfterValidation();
            expect(form.onValidCallback).to.be.calledOnce; 
            expect(form.onInvalidCallback).to.not.be.calledOnce; 
        });

        it('Should call invalid callback if form is invalid', () => {
            form.isValid = false;
            form.handleCallbacksAfterValidation();
            expect(form.onValidCallback).to.not.be.calledOnce; 
            expect(form.onInvalidCallback).to.be.calledOnce; 
        });
    });

    describe('Destroy method', () => {
        const formHtml = document.querySelector('#form');
        const form = new Form(formHtml);

        it('Should call destroy on all fields', () => {
            form.initialize({});

            form.fields.forEach(f => {
                sinon.spy(f, 'destroy');
            });

            form.destroy();
            form.fields.forEach(f => {
                expect(f.destroy).to.be.calledOnce;
            });
        });
    });
});