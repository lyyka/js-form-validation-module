import { assert, expect, use } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { JSDOM } from 'jsdom';
import Field from '../../src/core/Field';
import Form from '../../src/core/Form';
import { defaultValidationMessages } from '../../src/components/validationMessages';
import { rules } from '../../src/components/validationRulesGenerators';
import { validationFunctions } from '../../src/components/validationFunctions';
import { defaultOptions } from '../../src/options';
use(sinonChai);

const dom = new JSDOM(
    `<div>
        <input 
            id="test-input"
            type="text"
            name="test"
            placeholder="Test input field"
        />
    </div>`
);

global.window = dom.window;
global.document = dom.window.document;

describe('Test core Field class', () => {
    it('Should contain correct default property values', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);
        assert.equal(field.field, element);
        assert.isUndefined(field.form);
        assert.isUndefined(field.options);
        assert.isUndefined(field.validationRules);
        assert.isFalse(field.shouldReset);
        assert.isFalse(field.isLive);
        assert.isTrue(field.isValid);
    });

    describe('Options setter', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        before(() => {
            sinon.spy(field, 'live');
            sinon.spy(field, 'shouldResetOnInput');
        });

        it('Will respect options and not call flags setters', () => {
            field.setOptions({
                silent: true,
                live: false,
            });
            expect(field.live).to.have.not.been.called;
            expect(field.shouldResetOnInput).to.have.not.been.called;
        });

        it('Will respect options and call flags setters', () => {
            field.setOptions({
                silent: false,
                live: true,
            });
            expect(field.live).to.have.been.calledOnce;
            expect(field.shouldResetOnInput).to.have.been.calledOnce;
        });
    });

    describe('Validations rules setter', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        it('Should correctly set the property', () => {
            const object = {
                test: 123,
            };
            field.setValidationRules(object);
            assert.deepEqual(field.validationRules, object);
        });
    });

    describe('Parent Form setter', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        it('Should correctly set the property', () => {
            const form = new Form();
            field.setForm(form);
            assert.equal(field.form, form);
        });
    });

    describe('Validations rules getter', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        it('Should correctly get the property', () => {
            const object = {
                test: 123,
            };
            field.setValidationRules(object);
            assert.deepEqual(field.getValidationRules(), object);
        });
    });

    describe('Field HTML element getter', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        it('Should correctly get the property', () => {
            assert.equal(field.getFieldElement(), element);
        });
    });

    describe('Field name getter', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        it('Should correctly get the property', () => {
            element.setAttribute('name', 'test-name-123');
            assert.equal(field.getFieldName(), 'test-name-123');
        });
    });

    describe('Readable field name getter', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        it('Should correctly get the property', () => {
            element.setAttribute('name', 'my_custom_field');
            assert.equal(field.getReadableName(), 'My custom field');
        });
    });

    describe('Reset method', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        it('Should reset field and remove validation error message', () => {
            const options = {
                invalidClass: 'invalid',
                validClass: 'valid',
            };
            field.setOptions(options);

            const fakeValidationErrorMessage = document.createElement('p');
            fakeValidationErrorMessage.setAttribute('data-is-validation-error', '1');
            fakeValidationErrorMessage.innerText = 'Test';
            element.parentNode.appendChild(fakeValidationErrorMessage);
            element.classList.add(options.invalidClass);
            element.classList.add(options.validClass);

            field.reset();

            assert.isNull(element.parentNode.querySelector('[data-is-validation-error]'));
            assert.isFalse(element.classList.contains(options.invalidClass));
            assert.isFalse(element.classList.contains(options.validClass));
        });
    });

    describe('Validation method', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        afterEach(() => {
            field.reset();
        });

        it('Should filter out and work with non-string values in validation rules', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: true,
            });

            field.getFieldElement().value = 'Valid field value';
            field.setValidationRules([rules.required(), 0, null, undefined, 123]);

            assert.isTrue(field.validate());
            assert.isTrue(field.isValid);
        });

        it('Should return true if valid', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: true,
            });

            field.getFieldElement().value = 'Valid field value';
            field.setValidationRules([rules.required()]);

            assert.isTrue(field.validate());
            assert.isTrue(field.isValid);
        });

        it('Should return false if invalid', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: true,
            });

            field.getFieldElement().value = '';
            field.setValidationRules([rules.required()]);

            assert.isFalse(field.validate());
            assert.isFalse(field.isValid);
        });

        it('Should work with parametrized validators', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: false,
            });

            field.getFieldElement().value = 'a';
            field.setValidationRules([rules.in(['a', 'b', 'c'])]);

            assert.isTrue(field.validate());
        });

        it('Should attach message label if not valid and not silent', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: false,
            });

            field.getFieldElement().value = '';
            field.setValidationRules([rules.required()]);

            field.validate();
            
            assert.isNotNull(field.getFieldElement().parentNode.querySelector('[data-is-validation-error]'));
        });

        it('Should not attach message label if valid', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: false,
            });

            field.getFieldElement().value = '';
            field.setValidationRules([]);

            field.validate();
            
            assert.isNull(field.getFieldElement().parentNode.querySelector('[data-is-validation-error]'));
        });

        it('Should not attach message label if not valid and silent', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: true,
            });

            field.getFieldElement().value = '';
            field.setValidationRules([rules.required()]);

            field.validate();
            
            assert.isNull(field.getFieldElement().parentNode.querySelector('[data-is-validation-error]'));
        });

        it('Will not validate further if invalid rule encountered in order to prevent field to be faulty valid', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: false,
            });

            sinon.spy(validationFunctions, 'required');
            sinon.spy(validationFunctions, 'minStrLen');

            field.setValidationRules([
                rules.required(),
                rules.minStrLen(5),
            ]);

            field.validate();

            expect(validationFunctions.required).to.be.calledOnce;
            expect(validationFunctions.minStrLen).to.not.be.called;
        });

        it('Should throw an error if unknown validation function specified', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: true,
            });

            field.setValidationRules(['notAValidRule']);

            assert.throws(field.validate, Error);
        });

        it('Should return true if no rules defined for field', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: false,
            });

            field.setValidationRules([]);
            assert.isTrue(field.validate());
        });

        it('Should not attach valid class if valid and silent', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: true,
            });

            field.setValidationRules([]);
            field.validate();
            
            assert.isFalse(field.getFieldElement().classList.contains('valid'));
            assert.isFalse(field.getFieldElement().classList.contains('invalid'));
        });

        it('Should not attach invalid class if invalid and silent', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: true,
            });

            field.getFieldElement().value = '';
            field.setValidationRules([rules.required()]);

            field.validate();
            
            assert.isFalse(field.getFieldElement().classList.contains('valid'));
            assert.isFalse(field.getFieldElement().classList.contains('invalid'));
        });

        it('Should attach valid class if valid and not silent', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: false,
            });

            field.setValidationRules([]);
            field.validate();
            
            assert.isTrue(field.getFieldElement().classList.contains('valid'));
            assert.isFalse(field.getFieldElement().classList.contains('invalid'));
        });

        it('Should attach invalid class if invalid and not silent', () => {
            field.setOptions({
                validClass: 'valid',
                invalidClass: 'invalid',
                silent: false,
            });

            field.getFieldElement().value = '';
            field.setValidationRules([rules.required()]);

            field.validate();
            
            assert.isFalse(field.getFieldElement().classList.contains('valid'));
            assert.isTrue(field.getFieldElement().classList.contains('invalid'));
        });
    });
    
    describe('Attach validation message label method', () => {
        const element = document.getElementById('test-input');
        element.setAttribute('name', 'test_attach');
        const field = new Field(element);

        afterEach(() => {
            field.reset();
        });

        it('Should not attach if silent', () => {
            field.setOptions({
                silent: true
            });

            field.attachValidationMessageLabel('required', element.getAttribute('name'));

            assert.isNull(element.parentNode.querySelector('[data-is-validation-error]'));
        });

        it('Should attach using default message if none provided for that field', () => {
            field.setOptions({
                silent: false,
                validationMessages: {},
            });
            const fieldName = field.getFieldName();
            
            field.attachValidationMessageLabel('required', fieldName);

            const generatedLabel = element.parentNode.querySelector('[data-is-validation-error]');
            
            assert.isNotNull(generatedLabel);
            assert.equal(
                generatedLabel.innerText, 
                defaultValidationMessages.required(field.getReadableName())
            );
        });

        it('Should attach using default message if none provided for that field and rule combo', () => {
            const fieldName = field.getFieldName();

            const validationMessages = {};
            validationMessages[fieldName] = {
                'not-required': 'Custom message',
            };

            field.setOptions({
                silent: false,
                validationMessages,
            });
            
            field.attachValidationMessageLabel('required', fieldName);

            const generatedLabel = element.parentNode.querySelector('[data-is-validation-error]');
            
            assert.isNotNull(generatedLabel);
            assert.equal(
                generatedLabel.innerText, 
                defaultValidationMessages.required(field.getReadableName())
            );
        });

        it('Should attach using custom message if one is provided', () => {
            const fieldName = field.getFieldName();

            const validationMessages = {};
            validationMessages[fieldName] = {
                required: 'Custom message',
            };

            field.setOptions({
                silent: false,
                validationMessages: validationMessages,
            });
            
            field.attachValidationMessageLabel('required', field.getFieldName());

            const generatedLabel = element.parentNode.querySelector('[data-is-validation-error]');
            
            assert.isNotNull(generatedLabel);
            assert.equal(
                generatedLabel.innerText, 
                validationMessages[fieldName]['required']
            );
        });

        it('Should set message color from options object', () => {
            field.setOptions({
                silent: false,
                validationMessageColor: 'green',
            });
            const fieldName = element.getAttribute('name');
            
            field.attachValidationMessageLabel('required', fieldName);

            const generatedLabel = element.parentNode.querySelector('[data-is-validation-error]');
            
            assert.isNotNull(generatedLabel);
            assert.equal(generatedLabel.style.color, 'green');
        });
    });

    describe('Listeners', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);
        field.setForm(new Form());
        field.setOptions(defaultOptions);

        before(() => {
            sinon.spy(field, 'reset');
            sinon.spy(field, 'validate');
            sinon.spy(field.form, 'revalidate');
        });

        it('Should handle input if all switches are off', () => {
            field.shouldReset = false;
            field.isLive = false;

            field.onInput();
            expect(field.reset).to.not.be.calledOnce;
            expect(field.validate).to.not.be.calledOnce;
            expect(field.form.revalidate).to.not.be.calledOnce;
        });

        it('Should handle input if al switches are on', () => {
            field.live();
            field.shouldResetOnInput();

            field.onInput();
            expect(field.reset).to.be.calledOnce;
            expect(field.validate).to.be.calledOnce;
            expect(field.form.revalidate).to.be.calledOnce;
        });
    });

    describe('Listener binders', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        it('Should bind input event', () => {
            sinon.spy(field.getFieldElement(), 'addEventListener');
            field.bindInputListener();
            expect(field.getFieldElement().addEventListener).to.be.calledOnceWith('input', field.onInput);
        });
    });

    describe('Should reset on input switch', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        it('Should set "isLive" property to true and bind listener', () => {
            sinon.spy(field, 'bindInputListener');

            assert.isFalse(field.shouldReset);
            const f = field.shouldResetOnInput();
            assert.equal(f, field);
            assert.isTrue(field.shouldReset);
        
            expect(field.bindInputListener).to.be.calledOnce;
        });
    });

    describe('Live switch', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        it('Should set "isLive" property to true and bind listener', () => {
            sinon.spy(field, 'bindInputListener');

            assert.isFalse(field.isLive);
            const f = field.live();
            assert.equal(f, field);
            assert.isTrue(field.isLive);
        
            expect(field.bindInputListener).to.be.calledOnce;
        });
    });

    describe('Destroy method', () => {
        const element = document.getElementById('test-input');
        const field = new Field(element);

        it('Should remove input event listener', () => {
            sinon.spy(field.getFieldElement(), 'removeEventListener');
            field.destroy();
            expect(field.getFieldElement().removeEventListener).to.be.calledOnceWith('input', field.onInput);
        });
    });
});