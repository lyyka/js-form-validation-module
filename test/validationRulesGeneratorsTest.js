import { assert, expect, use } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import rules from '../src/components/validationRulesGenerators.js';
import CONFIG from '../src/config.js';
use(sinonChai);

describe('Test validation rules strings generation', function() {
    before(() => {
        sinon.stub(console, 'error');
    });

    describe('No parameter rules', function() {
        it('Should render required', function() {
            assert.equal(rules.required(), 'required');
        });
    
        it('Should render string', function() {
            assert.equal(rules.string(), 'string');
        });
    
        it('Should render email', function() {
            assert.equal(rules.email(), 'email');
        });
    });

    describe('Min/max string length rules', function() {
        it('Should render minStrLen', function() {
            const minStrLen = rules.minStrLen(2);
            assert.equal(minStrLen, `minStrLen${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty minStrLen if value is NaN', function() {
            const invalidValue = 'not a number';
            const minStrLen = rules.minStrLen(invalidValue);
            assert.equal(minStrLen, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to minStrLen()`);
        });

        it('Should render maxStrLen', function() {
            const maxStrLen = rules.maxStrLen(2);
            assert.equal(maxStrLen, `maxStrLen${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty maxStrLen if value is NaN', function() {
            const invalidValue = 'not a number';
            const maxStrLen = rules.maxStrLen(invalidValue);
            assert.equal(maxStrLen, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to maxStrLen()`);
        });
    });

    describe('"In" rule', function() {
        it('Should render in rule if array is passed', function() {
            assert.equal(rules.in(['a', 'b', 'c']), `in${CONFIG.parametrizedValidatorSeparator}a${CONFIG.parametrizedValidatorParametersSeparator}b${CONFIG.parametrizedValidatorParametersSeparator}c`);
        });
    
        it('Should render empty in rule if something other then array gets passed', function() {
            const invalidValue = 2;
            assert.equal(rules.in(invalidValue), '');
            expect(console.error).to.be.calledWith(`${invalidValue} is not an array.`);
        });
    });

    describe('"Between" rule', function() {
        it('Should render between rule if array is passed', function() {
            assert.equal(rules.between([-5, 5]), `between${CONFIG.parametrizedValidatorSeparator}-5${CONFIG.parametrizedValidatorParametersSeparator}5`);
        });

        it('Should render empty between rule if array with length other than 2 gets passed', function() {
            const invalidValue = [1, 2, 3];
            assert.equal(rules.between(invalidValue), '');
            expect(console.error).to.be.calledWith(`Error creating a 'between' rule with values ${invalidValue}`);
        });

        it('Should render empty between rule if something other then array gets passed', function() {
            const invalidValue = 2;
            assert.equal(rules.between(invalidValue), '');
            expect(console.error).to.be.calledWith(`Error creating a 'between' rule with values ${invalidValue}`);
        });
    });

    describe('"gt(e)" rule', function() {
        it('Should render gt', function() {
            const gt = rules.gt(2);
            assert.equal(gt, `gt${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty gt if value is NaN', function() {
            const invalidValue = 'not a number';
            const gt = rules.gt(invalidValue);
            assert.equal(gt, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to gt()`);
        });

        it('Should render gte', function() {
            const gte = rules.gte(2);
            assert.equal(gte, `gte${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty gte if value is NaN', function() {
            const invalidValue = 'not a number';
            const gte = rules.gte(invalidValue);
            assert.equal(gte, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to gte()`);
        });
    });

    describe('"lt(e)" rule', function() {
        it('Should render lt', function() {
            const lt = rules.lt(2);
            assert.equal(lt, `lt${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty lt if value is NaN', function() {
            const invalidValue = 'not a number';
            const lt = rules.lt(invalidValue);
            assert.equal(lt, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to lt()`);
        });

        it('Should render lte', function() {
            const lte = rules.lte(2);
            assert.equal(lte, `lte${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty lt if value is NaN', function() {
            const invalidValue = 'not a number';
            const lte = rules.lte(invalidValue);
            assert.equal(lte, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to lte()`);
        });
    });

    describe('Date rules', function() {
        it('Should render date', function() {
            assert.equal(rules.date('12-12-2025'), 'date:12-12-2025');
        });
    });
});