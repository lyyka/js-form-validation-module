/**
 * @returns {Object} An object that contains functions that generate validation rules strings
 */
 const rules = {
    /**
     * Generate 'in' validation rule string
     * @param {Array} values 
     */
    in: (values) => {
        if(Array.isArray(values)) {
            return "in:" + values.join(',');
        }

        console.error(`${values} is not an array.`);
        return "";
    },

    required: () => { return "required" },
    string: () => { return "string" },
    email: () => { return "email" },
};

export default rules;