import { assert } from 'chai';
import {CONFIG} from '../src/config.js';

describe('Config file test', () => {
    it('Should export object', () => {
        assert.isObject(CONFIG);
    });
});