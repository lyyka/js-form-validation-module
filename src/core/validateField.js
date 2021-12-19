import {validationFunctions} from '../components/validationFunctions.js';
import {CONFIG} from '../config.js';

/**
 * Validate specific field
 * @param {Field} field - HTMLElement field to be validated
 * @returns {boolean}
 */
export const validateField = (field) => {
    // Assume field is valid (if no rules are defined)
    let isValid = true;

    // Get an array of validation rules based on field name
    let validation = field.getValidationRules();

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
                isValid = fn(field.getFieldElement().value, parametersForValidator);
            } else {
                throw new Error(`Validator '${validatorName}' does not exist!`);
            }

            // Break as soon as possible if invalid, do not check other validators
            if(!isValid) {
                field.attachValidationMessageLabel(validatorName,parametersForValidator);
                break;
            }
        }
    }

    return isValid;
};