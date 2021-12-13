import {CONFIG} from '../config.js';

export const rules = {
    /**
     * Genrate 'required' validation rule
     * @returns {String}
     */
    required: () => { return 'required'; },

    /**
     * Genrate 'string' validation rule
     * @returns {String}
     */
    string: () => { return 'string'; },

    /**
     * Genrate 'email' validation rule
     * @returns {String}
     */
    email: () => { return 'email'; },

    /**
     * Generate 'minStrLen' validation rule string
     * @param {Number} number 
     * @returns {String}
     */
    minStrLen: (number) => {
        if(isNaN(number)) {
            console.error(`Passing NaN value of '${number}' to minStrLen()`);
            return '';
        }

        return `minStrLen${CONFIG.parametrizedValidatorSeparator}${number}`;
    },

    /**
     * Generate 'maxStrLen' validation rule string
     * @param {Number} number 
     * @returns {String}
     */
    maxStrLen: (number) => {
        if(isNaN(number)) {
            console.error(`Passing NaN value of '${number}' to maxStrLen()`);
            return '';
        }

        return `maxStrLen${CONFIG.parametrizedValidatorSeparator}${number}`;
    },

    /**
     * Generate 'in' validation rule string
     * @param {Array} values 
     * @returns {String}
     */
    in: (values) => {
        if(Array.isArray(values)) {
            return `in${CONFIG.parametrizedValidatorSeparator}` + values.join(CONFIG.parametrizedValidatorParametersSeparator);
        }

        console.error(`${values} is not an array.`);
        return '';
    },

    /**
     * Generate 'between' validation rule string
     * @param {Array} values 
     * @returns {String}
     */
    between: (values) => {
        if(Array.isArray(values) && values.length == 2) {
            return `between${CONFIG.parametrizedValidatorSeparator}` + values.join(CONFIG.parametrizedValidatorParametersSeparator);
        }

        console.error(`Error creating a 'between' rule with values ${values}`);
        return '';
    },

    /**
     * Generate 'gt' validation rule string
     * @param {Number} number 
     * @returns {String}
     */
    gt: (number) => {
        if(isNaN(number)) {
            console.error(`Passing NaN value of '${number}' to gt()`);
            return '';
        }

        return `gt${CONFIG.parametrizedValidatorSeparator}${number}`;
    },

    /**
     * Generate 'gte' validation rule string
     * @param {Number} number 
     * @returns {String}
     */
    gte: (number) => {
        if(isNaN(number)) {
            console.error(`Passing NaN value of '${number}' to gte()`);
            return '';
        }

        return `gte${CONFIG.parametrizedValidatorSeparator}${number}`;
    },

    /**
     * Generate 'lt' validation rule string
     * @param {Number} number 
     * @returns {String}
     */
    lt: (number) => {
        if(isNaN(number)) {
            console.error(`Passing NaN value of '${number}' to lt()`);
            return '';
        }

        return `lt${CONFIG.parametrizedValidatorSeparator}${number}`;
    },

    /**
     * Generate 'lte' validation rule string
     * @param {Number} number 
     * @returns {String}
     */
    lte: (number) => {
        if(isNaN(number)) {
            console.error(`Passing NaN value of '${number}' to lte()`);
            return '';
        }

        return `lte${CONFIG.parametrizedValidatorSeparator}${number}`;
    },

    /**
     * Generate 'date' validation rule string
     * @param {*} value 
     * @returns 
     */
    date: (value) => {
        return `date${CONFIG.parametrizedValidatorSeparator}${value}`;
    },
};