export const validationFunctions = {
    /**
     * Checks if the value is not undefined/null/empty
     * @param {*} value
     * @returns {boolean}
     */
    required: (value) => {
        return value !== undefined && value !== null && value !== '';
    },

    /**
     * Checks if value is of type string
     * @param {*} value
     * @returns {boolean}
     */
    string: (value) => {
        return typeof value === 'string';
    },

    /**
     * Check if string value is above minimum length
     * @param {*} value 
     * @param {Array} params
     * @returns {boolean}
     */
    minStrLen: (value, params) => {
        return typeof value === 'string' && value.length >= params[0];
    },

    /**
     * Check if string value is below maximum length
     * @param {*} value 
     * @param {Array} params
     * @returns {boolean}
     */
    maxStrLen: (value, params) => {
        return typeof value === 'string' && value.length <= params[0];
    },
 
    /**
     * Checks if value matches email regex
     * @param {*} value 
     * @returns {boolean}
     */
    email: (value) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    },

    /**
     * Checks if value is in an array of other values
     * @param {*} value 
     * @param {Array} params 
     * @returns {boolean}
     */
    in: (value, params) => {
        return params.includes(value);
    },

    /**
     * Checks if the value is between two given values
     * @param {*} value 
     * @param {Array} params 
     * @returns {boolean}
     */
    between: (value, params) => {
        const numVal = Number(value);
        return numVal >= params[0] && numVal <= params[1];
    },
    
    /**
     * Checks if the value is strictly greater than the comparison value
     * @param {*} value 
     * @param {Number} params 
     * @returns {boolean}
     */
    gt: (value, params) => {
        return Number(value) > params[0];
    },

    /**
     * Checks if the value is greater or equal than the comparison value
     * @param {*} value 
     * @param {Number} params 
     * @returns {boolean}
     */
    gte: (value, params) => {
        return Number(value) >= params[0];
    },
    
    /**
     * Checks if the value is strictly less than the comparison value 
     * @param {*} value 
     * @param {Number} params 
     * @returns {boolean} 
     */
    lt: (value, params) => {
        return Number(value) < params[0];
    },

    /**
     * Checks if the value is less or equal than the comparison value
     * @param {*} value 
     * @param {Number} params 
     * @returns {boolean}
     */
    lte: (value, params) => {
        return Number(value) <= params[0];
    },

    /**
     * Check if provided value matches a date format
     * @param {*} value 
     * @returns {boolean}
     */
    date: (value) => {
        return !isNaN(Date.parse(value));
    },
};