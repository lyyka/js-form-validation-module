import defaultValidationMessages from './validationMessages.js';
import validationFunctions from './validationFunctions.js';
import CONFIG from '../config.js';

/**
 * Validate specific field
 * @param {HTMLElement} field - HTMLElement field to be validated
 * @param {Object} options - An options object to customize the validation process
 * @returns 
 */
const validateField = (field, validationRules, options = {}) => {
    const name = field.getAttribute('name');
    const validationMessages = options.validationMessages || {};

    // Make each field valid again, so red outline does not persist
    if(!options.silent) {
        const removeExistingValidationErrorLabel = function(field) {
            const existingValidationErrorMessage = field.parentNode.querySelector('[data-is-validation-error]');
            if(existingValidationErrorMessage) {
                existingValidationErrorMessage.parentNode.removeChild(existingValidationErrorMessage);
            }
        };

        removeExistingValidationErrorLabel(field);
        field.classList.remove(options.invalidClass);
        field.addEventListener('input', function() {
            removeExistingValidationErrorLabel(field);
            field.classList.remove(options.invalidClass);
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

            if(rule.includes(CONFIG.parametrizedValidatorSeparator)) { // Handle parametrized rules with ':' that need to be split into fn (before ':') and parameters (after ':')
                const parts = rule.split(CONFIG.parametrizedValidatorSeparator);
                validatorName = parts[0];
                parametersForValidator = parts[1].split(CONFIG.parametrizedValidatorParametersSeparator);
            }
            
            const fn = validationFunctions[validatorName];
            if(fn) {
                isValid = fn(field.value, parametersForValidator);
            } else {
                throw new Error(`Validator '${validatorName}' does not exist!`);
            }

            // Break as soon as possible if invalid, do not check other validators
            if(!isValid) {
                if(!options.silent) {
                    let readableName = name.split('_').join(' '); // field_name -> field name
                    readableName = readableName.charAt(0).toUpperCase() + readableName.slice(1); // capitalize the name
                    const customMessage = validationMessages[name] ? validationMessages[name][validatorName] : undefined;
                    const finalMessage = customMessage || defaultValidationMessages[validatorName](readableName, parametersForValidator); // get the translation based on validator name if custom message is not defined

                    // Create error message
                    const textNode = document.createElement('p');
                    textNode.setAttribute('data-is-validation-error', '1');
                    textNode.style.color = options.validationMessageColor;
                    textNode.innerText = finalMessage;
                    field.parentNode.appendChild(textNode);
                }

                break;
            }
        }
    }

    return isValid;
};

export default validateField;