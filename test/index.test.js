import { assert, expect } from 'chai';
import {Form, rules} from '../src/index.js';

describe('Test that modules index file exports expected objects', () => {
    it('Should export the Form object with default properties', () => {
        const form = new Form();
        expect(form).to.be.instanceOf(Form);
        expect(form.isValid).to.be.true;
    });

    it('Should export rules generators', () => {
        assert.isObject(rules);

        const expectedRulesGenerators = [
            'required',
            'string',
            'email',
            'minStrLen',
            'maxStrLen',
            'in',
            'between',
            'gt',
            'gte',
            'lt',
            'lte',
            'date',
        ];

        expectedRulesGenerators.forEach(rule => {
            assert.property(rules, rule);
            assert.isFunction(rules[rule]);
        });
    });
});