import {rules} from './components/validationRulesGenerators.js';
import {getFieldsToValidateFromForm} from './core/getFieldsToValidateFromForm.js';
import {defaultOptions} from './options.js';
import Field from './core/classes/Field';

/**
 * Validates whole form, given as HTML element
 * @param {HTMLElement} form - HTMLEelement form element
 * @param {Object} validationRules - An object of validation rules to apply to fields
 * @param {Object} options - An object of options to customize the validation
 * @returns {Object} validationResult Result of the validation
 * @returns {Array} validationResult.validFormFields An array of HTMLElement fields that passed the validation
 * @returns {boolean} validationResult.formIsValid Boolean value that tells if the whole form was valid or not
 */
const validateForm = (form, validationRules, options = {}) => {
    options = {
        ...defaultOptions,
        ...options,
    };

    const validFormFields = []; // Save an array of valid fields

    const fieldsToSend = getFieldsToValidateFromForm(form); // Get all fields from form

    let formIsValid = true;

    // Validate each field in form against defined validation rules
    for(let i = 0; i < fieldsToSend.length; i++) {
        // Set up the field
        const field = new Field(fieldsToSend[i]);
        field.setValidationRules(validationRules[field.getFieldName()]);
        field.setOptions(options);
        field.reset();

        const fieldIsValid = field.validate();

        if(!fieldIsValid) {
            formIsValid = false;
        } else if(field.getValidationRules()) {
            validFormFields.push(fieldsToSend[i]);
        }
    }

    return { validFormFields, formIsValid };
};

export {
    validateForm,
    rules,
}; 