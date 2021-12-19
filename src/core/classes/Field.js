import {defaultValidationMessages} from '../../components/validationMessages';
import {validateField} from '../validateField';

export default class Field {
    /**
     * @param {HTMLElement} field 
     */
    constructor(field) {
        this.field = field;
        this.options = undefined;
        this.validationRules = undefined;
        this.shouldReset = false;
        this.isLive = false;

        this.setOptions = this.setOptions.bind(this);
        this.setValidationRules = this.setValidationRules.bind(this);
        this.getFieldElement = this.getFieldElement.bind(this);
        this.reset = this.reset.bind(this);
        this.validate = this.validate.bind(this);
        this.bindInputListener = this.bindInputListener.bind(this);
        this.shouldResetOnInput = this.shouldResetOnInput.bind(this);
        this.live = this.live.bind(this);
    }

    /**
     * Sets the options parameter. It automatically turns off/on any switches that depend on options object
     * @param {Object} options 
     */
    setOptions(options) {
        this.options = options;

        if(options.live) {
            this.live();
        }
        if(!options.silent) {
            this.shouldResetOnInput();
        }
    }

    /**
     * @param {Object} validationRules 
     */
    setValidationRules(validationRules) {
        this.validationRules = validationRules;
    }

    /**
     * Return set validation rules
     * @returns {Array}
     */
    getValidationRules() {
        return this.validationRules;
    }

    /**
     * Get field as html element
     * @returns {HTMLElement} 
     */
    getFieldElement() {
        return this.field;
    }

    /**
     * Get fiels name attribute
     * @returns {String}
     */
    getFieldName() {
        return this.getFieldElement().getAttribute('name');
    }

    /**
     * Resets the field, it removes the validation message from fields parent element and removes fields classess for valid/invalid state
     */
    reset() {
        // Remove label
        const existingValidationErrorMessage = this.field.parentNode.querySelector('[data-is-validation-error]');
        if(existingValidationErrorMessage) {
            existingValidationErrorMessage.parentNode.removeChild(existingValidationErrorMessage);
        }

        // Remove classes
        this.field.classList.remove(this.options.invalidClass);
        this.field.classList.remove(this.options.validClass);
    }

    /**
     * Validates the field
     * @returns {boolean} 
     */
    validate() {
        const fieldIsValid = validateField(this);

        if(!this.options.silent) {
            const classToAdd = fieldIsValid ? this.options.validClass : this.options.invalidClass;
            this.getFieldElement().classList.add(classToAdd);
        }

        return fieldIsValid;
    }

    /**
     * Attaches validation message to the field parent
     * @param {String} validatorName 
     * @param {Array} parametersForValidator 
     */
    attachValidationMessageLabel(validatorName, parametersForValidator) {
        if(!this.options.silent) {
            const name = this.getFieldName();
            const validationMessages = this.options.validationMessages || {};
    
            let readableName = name.split('_').join(' '); // field_name -> field name
            readableName = readableName.charAt(0).toUpperCase() + readableName.slice(1); // capitalize the name
            const customMessage = validationMessages[name] ? validationMessages[name][validatorName] : undefined;
            const finalMessage = customMessage || defaultValidationMessages[validatorName](readableName, parametersForValidator); // get the translation based on validator name if custom message is not defined
    
            // Create and append error message
            const textNode = document.createElement('p');
            textNode.setAttribute('data-is-validation-error', '1');
            textNode.style.color = this.options.validationMessageColor;
            textNode.style.marginTop = '0px';
            textNode.innerText = finalMessage;
            this.getFieldElement().parentNode.appendChild(textNode);
        }
    }

    /**
     * Binds "input" listener so field can be reset/live validated on input
     */
    bindInputListener() {
        this.field.addEventListener('input', () => {
            if(this.shouldReset) {
                this.reset();
            }

            if(this.isLive) {
                this.validate();
            }
        });
    }

    /**
     * Sets the reset flag
     * @returns {Field}
     */
    shouldResetOnInput() {
        this.shouldReset = true;
        this.bindInputListener();
        return this;
    }

    /**
     * Sets the live flag
     * @returns {Field}
     */
    live() {
        this.isLive = true;
        this.bindInputListener();
        return this;
    }
}