import validationFunctions from './components/validationFunctions';
import defaultValidationMessages from './components/validationMessages';
import rules from './components/validationRulesGenerators';

/**
 * Validate specific field
 * @param {HTMLElement} field Field to be validated
 * @param {Object} validationRules Validation rules for all fields
 * @param {boolean} silent Defines if validation should be silent, meaning that fields will not be highlighted on frontend
 * @returns 
 */
const validateField = (field, validationRules, validationMessages = {}, silent = false) => {
    const name = field.getAttribute('name');

    // Make each field valid again, so red outline does not persist
    if(!silent) {
        const removeExistingValidationErrorLabel = function(field) {
            const existingValidationErrorMessage = field.parentNode.querySelector('[data-is-validation-error]');
            if(existingValidationErrorMessage) {
                existingValidationErrorMessage.parentNode.removeChild(existingValidationErrorMessage);
            }
        };

        removeExistingValidationErrorLabel(field);
        field.classList.remove('invalid');
        field.addEventListener('input', function() {
            removeExistingValidationErrorLabel(field);
            field.classList.remove('invalid');
        });
    }

    // Assume field is valid (if no rules are defined)
    let isValid = true;

    // Get an array of validation rules based on field name
    let validation = validationRules[name];

    // Check if rules actually exists
    if(validation) {
        // Filter out rules that are not of string type
        validation = validation.filter(v => typeof v === 'string');

        // Go through each rule and validate the fields value against them
        for(const rule of validation) {
            let validatorName = rule;
            let parametersForValidator = undefined;

            if(rule.includes(":")) { // Handle parametrized rules with ':' that need to be split into fn (before ':') and parameters (after ':')
                const parts = rule.split(":");
                validatorName = parts[0];
                parametersForValidator = parts[1].split(',');
            }
            
            const fn = validationFunctions[validatorName];
            if(fn) {
                isValid = fn(field.value, parametersForValidator);
            } else {
                throw new Error(`Validator '${validatorName}' does not exist!`);
            }

            // Break as soon as possible if invalid, do not check other validators
            if(!isValid) {
                if(!silent) {
                    let readableName = name.split('_').join(" "); // field_name -> field name
                    readableName = readableName.charAt(0).toUpperCase() + readableName.slice(1); // capitalize the name
                    const customMessage = validationMessages[name] ? validationMessages[name][validatorName] : undefined;
                    const finalMessage = customMessage || defaultValidationMessages[validatorName](readableName, parametersForValidator); // get the translation based on validator name if custom message is not defined

                    // Create error message
                    const textNode = document.createElement('p');
                    textNode.setAttribute('data-is-validation-error', '1');
                    textNode.style.color = 'red';
                    textNode.innerText = finalMessage;
                    field.parentNode.appendChild(textNode);
                }

                break;
            }
        }
    }

    return isValid;
}

/**
 * Gets all HTMLElement fields from form that need to be validated
 * This excludes unchecked checkboxes and radio buttons
 * @param {HTMLElement} form
 * @returns {HTMLElement[]} An array of elements
 */
const getFieldsToValidateFromForm = (form) => {
    const result = Array.from(form.querySelectorAll("[name]:not([type='checkbox']):not([type='radio'])"));

    // Add checked checkboxes and radios
    const addChecked = (type) => {
        form.querySelectorAll(`[type=${type}]:checked`).forEach(el => { result.push(el); });
    };
    addChecked('radio');
    addChecked('checkbox');

    return result;
}

/**
 * Validates whole form, given as HTML element
 * @param {HTMLElement} form 
 * @param {Object} validationRules 
 * @param {boolean} silent 
 * @returns 
 */
const validateForm = (form, validationRules, validationMessages = {}, silent = false) => {
    const formData = []; // Data that gets submitted after validation
    const fieldsToSend = getFieldsToValidateFromForm(form);
    let formIsValid = true; // Form valid check

    // Validate each field in form against defined validation rules
    for(let i = 0; i < fieldsToSend.length; i++) {
        const field = fieldsToSend[i];
        if(!validateField(field, validationRules, validationMessages, silent)) {
            formIsValid = false;
            if(!silent) {
                field.classList.add('invalid');
            }
        } else if(Object.keys(validationRules).includes(field.getAttribute("name"))) {
            formData.push(field);
        }
    }

    return { formData, formIsValid };
};

export {
    validateForm,
    rules,
}; 