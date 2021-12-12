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
};