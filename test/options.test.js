import { assert } from 'chai';
import {defaultOptions} from '../src/options.js';

describe('Options file test', () => {
    it('Should export object', () => {
        assert.isObject(defaultOptions);
    });
});