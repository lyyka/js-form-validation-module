import { assert, expect, use } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {rules} from '../../src/components/validationRulesGenerators.js';
import {validationFunctions} from '../../src/components/validationFunctions.js';
import {CONFIG} from '../../src/config.js';
use(sinonChai);

describe('Test validation rules strings generation', () => {
    before(() => {
        sinon.stub(console, 'error');
    });

    // Make sure that there is a generator function for each defined validation function
    it('Should be defined for each validation function', () => {
        const functions = Object.keys(validationFunctions);
        functions.forEach(f => {
            expect(rules[f]).to.not.be.undefined;
        });
    });

    describe('No parameter rules', () => {
        it('Should render required', () => {
            assert.equal(rules.required(), 'required');
        });
    
        it('Should render string', () => {
            assert.equal(rules.string(), 'string');
        });
    
        it('Should render email', () => {
            assert.equal(rules.email(), 'email');
        });
    });

    describe('Min/max string length rules', () => {
        it('Should render minStrLen', () => {
            const minStrLen = rules.minStrLen(2);
            assert.equal(minStrLen, `minStrLen${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty minStrLen if value is NaN', () => {
            const invalidValue = 'not a number';
            const minStrLen = rules.minStrLen(invalidValue);
            assert.equal(minStrLen, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to minStrLen()`);
        });

        it('Should render maxStrLen', () => {
            const maxStrLen = rules.maxStrLen(2);
            assert.equal(maxStrLen, `maxStrLen${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty maxStrLen if value is NaN', () => {
            const invalidValue = 'not a number';
            const maxStrLen = rules.maxStrLen(invalidValue);
            assert.equal(maxStrLen, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to maxStrLen()`);
        });
    });

    describe('"In" rule', () => {
        it('Should render in rule if array is passed', () => {
            assert.equal(rules.in(['a', 'b', 'c']), `in${CONFIG.parametrizedValidatorSeparator}a${CONFIG.parametrizedValidatorParametersSeparator}b${CONFIG.parametrizedValidatorParametersSeparator}c`);
        });
    
        it('Should render empty in rule if something other then array gets passed', () => {
            const invalidValue = 2;
            assert.equal(rules.in(invalidValue), '');
            expect(console.error).to.be.calledWith(`${invalidValue} is not an array.`);
        });
    });

    describe('"Between" rule', () => {
        it('Should render between rule if array is passed', () => {
            assert.equal(rules.between([-5, 5]), `between${CONFIG.parametrizedValidatorSeparator}-5${CONFIG.parametrizedValidatorParametersSeparator}5`);
        });

        it('Should render empty between rule if array with length other than 2 gets passed', () => {
            const invalidValue = [1, 2, 3];
            assert.equal(rules.between(invalidValue), '');
            expect(console.error).to.be.calledWith(`Error creating a 'between' rule with values ${invalidValue}`);
        });

        it('Should render empty between rule if something other then array gets passed', () => {
            const invalidValue = 2;
            assert.equal(rules.between(invalidValue), '');
            expect(console.error).to.be.calledWith(`Error creating a 'between' rule with values ${invalidValue}`);
        });
    });

    describe('"gt(e)" rule', () => {
        it('Should render gt', () => {
            const gt = rules.gt(2);
            assert.equal(gt, `gt${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty gt if value is NaN', () => {
            const invalidValue = 'not a number';
            const gt = rules.gt(invalidValue);
            assert.equal(gt, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to gt()`);
        });

        it('Should render gte', () => {
            const gte = rules.gte(2);
            assert.equal(gte, `gte${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty gte if value is NaN', () => {
            const invalidValue = 'not a number';
            const gte = rules.gte(invalidValue);
            assert.equal(gte, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to gte()`);
        });
    });

    describe('"lt(e)" rule', () => {
        it('Should render lt', () => {
            const lt = rules.lt(2);
            assert.equal(lt, `lt${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty lt if value is NaN', () => {
            const invalidValue = 'not a number';
            const lt = rules.lt(invalidValue);
            assert.equal(lt, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to lt()`);
        });

        it('Should render lte', () => {
            const lte = rules.lte(2);
            assert.equal(lte, `lte${CONFIG.parametrizedValidatorSeparator}2`);
        });

        it('Should render empty lt if value is NaN', () => {
            const invalidValue = 'not a number';
            const lte = rules.lte(invalidValue);
            assert.equal(lte, '');
            expect(console.error).to.be.calledWith(`Passing NaN value of '${invalidValue}' to lte()`);
        });
    });

    describe('Date rules', () => {
        it('Should render date', () => {
            assert.equal(rules.date('12-12-2025'), 'date:12-12-2025');
        });
    });
});