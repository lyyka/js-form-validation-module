/**
 * Get all validation functions
 * @returns Object
 */
const validationFunctions = {
    /**
     * Checks if the value is not undefined/null/empty
     * @param {*} value 
     * @returns boolean
     */
    required: (value) => {
        return value !== undefined && value !== null && value !== '';
    },

    /**
     * Checks if value is of type string
     * @param {*} value 
     * @returns boolean
     */
    string: (value) => {
        return typeof value === 'string';
    },

    /**
     * Checks if value matches email regex
     * @param {*} value 
     * @returns boolean
     */
    email: (value) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    },

    /**
     * Checks if value is in an array of other values
     * @param {*} value 
     * @param {Array} values 
     * @returns boolean
     */
    in: (value, values) => {
        return values.includes(value);
    },

    /**
     * Checks if the value is between two given values
     * @param {*} value 
     * @param {Array} values 
     * @returns 
     */
    between: (value, values) => {
        const numVal = Number(value);
        return numVal >= values[0] && numVal <= values[1];
    },
    
    /**
     * Checks if the value is strictly greater than the comparison value
     * @param {*} value 
     * @param {Number} comparisonValue 
     * @returns 
     */
    gt: (value, comparisonValue) => {
        return Number(value) > comparisonValue;
    },

    /**
     * Checks if the value is greater or equal than the comparison value
     * @param {*} value 
     * @param {Number} comparisonValue 
     * @returns 
     */
    gte: (value, comparisonValue) => {
        return Number(value) >= comparisonValue;
    },
    
    /**
     * Checks if the value is strictly less than the comparison value 
     * @param {*} value 
     * @param {Number} comparisonValue 
     * @returns 
     */
    lt: (value, comparisonValue) => {
        return Number(value) < comparisonValue;
    },

    /**
     * Checks if the value is less or equal than the comparison value
     * @param {*} value 
     * @param {Number} comparisonValue 
     * @returns 
     */
    lte: (value, comparisonValue) => {
        return Number(value) <= comparisonValue;
    },
};

export default validationFunctions;