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
        return value !== undefined && value !== null && value !== "";
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
        // Code copied from: https://stackoverflow.com/a/46181
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
     * Example fns
     */
    
    // Between two values
    between: (value, values) => {
        const numVal = Number(value);
        return numVal >= values[0] && numVal <= values[1];
    },
    
    // Greater
    gt: (value, comparisonValue) => {
        return Number(value) > comparisonValue[0]
    },

    // Greater or equal
    gte: (value, comparisonValue) => {
        return Number(value) >= comparisonValue[0];
    },
    
    // Less then
    lt: (value, comparisonValue) => {
        return Number(value) > comparisonValue[0];
    },

    // Less then or equal
    lte: (value, comparisonValue) => {
        return Number(value) >= comparisonValue[0];
    },
};

export default validationFunctions;