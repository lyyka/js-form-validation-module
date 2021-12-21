import { expect } from 'chai';
import {validationFunctions} from '../../src/components/validationFunctions.js';
import {defaultValidationMessages} from '../../src/components/validationMessages.js';

describe('Test default validation messages getters', () => {
    // Make sure that there is a default validation message for each defined validation function
    it('Should be defined for each validation function', () => {
        const functions = Object.keys(validationFunctions);
        functions.forEach(f => {
            expect(defaultValidationMessages[f]).to.not.be.undefined;
        });
    });

    it('Should return a string for each rule', () => {
        const fieldName = 'test_field_name';
        const params = {
            required: [fieldName],
            string: [fieldName],
            email: [fieldName],
            in: [fieldName],
            between: [fieldName, [1, 10]],
            gt: [fieldName, 1],
            gte: [fieldName, 1],
            lt: [fieldName, 10],
            lte: [fieldName, 10],
            date: [fieldName],
            minStrLen: [fieldName, 1],
            maxStrLen: [fieldName, 10],
        };

        Object.keys(params).forEach(key => {
            const fn = defaultValidationMessages[key];
            expect(fn).to.not.be.undefined;
            expect(fn(...params[key])).to.be.string;
        });
    });
});