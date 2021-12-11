import rules from './components/validationRulesGenerators';
import validateField from './components/validateField';
import getFieldsToValidateFromForm from './components/getFieldsToValidateFromForm';
import defaultOptions from './components/options';

/**
 * Validates whole form, given as HTML element
 * @param {HTMLElement} form 
 * @param {Object} validationRules 
 * @param {Object} options 
 * @returns 
 */
const validateForm = (form, validationRules, options = {}) => {
    options = {
        ...options,
        ...defaultOptions(),
    };

    const validFormFields = []; // Save an array of valid fields

    const fieldsToSend = getFieldsToValidateFromForm(form); // Get all fields from form

    let formIsValid = true;

    // Validate each field in form against defined validation rules
    for(let i = 0; i < fieldsToSend.length; i++) {
        const field = fieldsToSend[i];
        if(!validateField(field, validationRules, options)) {
            formIsValid = false;
            if(!options.silent) {
                field.classList.add(options.invalidClass);
            }
        } else if(Object.keys(validationRules).includes(field.getAttribute('name'))) {
            validFormFields.push(field);
        }
    }

    return { validFormFields, formIsValid };
};

export {
    validateForm,
    rules,
}; 