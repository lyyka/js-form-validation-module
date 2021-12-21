import { expect } from 'chai';
import {validationFunctions} from '../../src/components/validationFunctions.js';

describe('Test validation functions', () => {
    describe('required()', () => {
        it('Should return true if param exists', () => {
            [
                1,
                '1',
                [1, 2, 3]
            ].forEach(test => {
                expect(validationFunctions.required(test)).to.be.true;
            });
        });

        it('Should return false if param does not exist', () => {
            [
                undefined,
                null,
                ''
            ].forEach(test => {
                expect(validationFunctions.required(test)).to.be.false;
            });
        });
    });

    describe('string()', () => {
        it('Should return true if param is string', () => {
            expect(
                validationFunctions.string('This is string')
            ).to.be.true;
        });

        it('Should return false if param is not of string type', () => {
            [
                1,
                [1, 2, 3],
                undefined,
                null,
                {},
            ].forEach(test => {
                expect(validationFunctions.string(test)).to.be.false;
            });
        });
    });

    describe('minStrLen()', () => {
        it('Should return false for non-string param', () => {
            expect(validationFunctions.minStrLen(1, [5])).to.be.false;
        });

        it('Should return true if min length exceeded', () => {
            const a = '123456';
            expect(validationFunctions.minStrLen(a, [5])).to.be.true;
        });

        it('Should return false if min length not satisfied', () => {
            const a = '1';
            expect(validationFunctions.minStrLen(a, [5])).to.be.false;
        });
    });

    describe('maxStrLen()', () => {
        it('Should return false for non-string param', () => {
            expect(validationFunctions.maxStrLen(1, [5])).to.be.false;
        });

        it('Should return true if below max length', () => {
            const a = '1';
            expect(validationFunctions.maxStrLen(a, [5])).to.be.true;
        });

        it('Should return false if max length exceeded', () => {
            const a = '123456';
            expect(validationFunctions.maxStrLen(a, [5])).to.be.false;
        });
    });

    describe('email()', () => {
        it('Should return true for valid email string', () => {
            const a = 'valid@email.com';
            expect(validationFunctions.email(a)).to.be.true;
        });

        it('Should not be case sensitive', () => {
            const a = 'VaLiD@EmAiL.cOm';
            expect(validationFunctions.email(a)).to.be.true;
        });

        it('Should return false for invalid email string', () => {
            const a = '123not-456';
            expect(validationFunctions.email(a)).to.be.false;
        });
    });

    describe('in()', () => {
        it('Should return true if value is in defined values', () => {
            const a = 1;
            const vals = [1, 2, 3];
            expect(validationFunctions.in(a, vals)).to.be.true; 
        });

        it('Should return false if value is not in defined values', () => {
            const a = 100;
            const vals = [1, 2, 3];
            expect(validationFunctions.in(a, vals)).to.be.false; 
        });
    });

    describe('between()', () => {
        it('Should return true if value is strictly in range', () => {
            const a = 5;
            const vals = [1, 10];
            expect(validationFunctions.between(a, vals)).to.be.true; 
        });

        it('Should return true if value is on bottom edge of range', () => {
            const a = 1;
            const vals = [1, 10];
            expect(validationFunctions.between(a, vals)).to.be.true; 
        });

        it('Should return true if value is on top edge of range', () => {
            const a = 10;
            const vals = [1, 10];
            expect(validationFunctions.between(a, vals)).to.be.true; 
        });

        it('Should return false if value is over range', () => {
            const a = 11;
            const vals = [1, 10];
            expect(validationFunctions.between(a, vals)).to.be.false; 
        });

        it('Should return false if value is below range', () => {
            const a = 0;
            const vals = [1, 10];
            expect(validationFunctions.between(a, vals)).to.be.false; 
        });
    });

    describe('gt()', () => {
        it('Should return true if value is strictly greater', () => {
            const a = 100;
            const vals = [10];
            expect(validationFunctions.gt(a, vals)).to.be.true;
        });

        it('Should return false if value is equal', () => {
            const a = 10;
            const vals = [10];
            expect(validationFunctions.gt(a, vals)).to.be.false;
        });

        it('Should return false if value is lower', () => {
            const a = 0;
            const vals = [10];
            expect(validationFunctions.gt(a, vals)).to.be.false;
        });
    });

    describe('gte()', () => {
        it('Should return true if value is strictly greater', () => {
            const a = 100;
            const vals = [10];
            expect(validationFunctions.gte(a, vals)).to.be.true;
        });

        it('Should return true if value is equal', () => {
            const a = 10;
            const vals = [10];
            expect(validationFunctions.gte(a, vals)).to.be.true;
        });

        it('Should return false if value is lower', () => {
            const a = 0;
            const vals = [10];
            expect(validationFunctions.gte(a, vals)).to.be.false;
        });
    });

    describe('lt()', () => {
        it('Should return true if value is strictly lower', () => {
            const a = 9;
            const vals = [10];
            expect(validationFunctions.lt(a, vals)).to.be.true;
        });

        it('Should return false if value is equal', () => {
            const a = 10;
            const vals = [10];
            expect(validationFunctions.lt(a, vals)).to.be.false;
        });

        it('Should return false if value is greater', () => {
            const a = 11;
            const vals = [10];
            expect(validationFunctions.lt(a, vals)).to.be.false;
        });
    });

    describe('lte()', () => {
        it('Should return true if value is strictly lower', () => {
            const a = 9;
            const vals = [10];
            expect(validationFunctions.lte(a, vals)).to.be.true;
        });

        it('Should return true if value is equal', () => {
            const a = 10;
            const vals = [10];
            expect(validationFunctions.lte(a, vals)).to.be.true;
        });

        it('Should return false if value is greater', () => {
            const a = 11;
            const vals = [10];
            expect(validationFunctions.lte(a, vals)).to.be.false;
        });
    });

    describe('date()', () => {
        it('Should return true if valid date', () => {
            expect(validationFunctions.date('10/10/2021')).to.be.true;
        });

        it('Should return false if not valid date', () => {
            expect(validationFunctions.date('not a date')).to.be.false;
        });
    });
});