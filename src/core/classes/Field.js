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
     * @returns {HTMLElement} 
     */
    getFieldElement() {
        return this.field;
    }

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
     * @returns {boolean} 
     */
    validate() {
        const fieldIsValid = validateField(
            this,
            this.validationRules,
            this.options
        );

        if(!this.options.silent) {
            const classToAdd = fieldIsValid ? this.options.validClass : this.options.invalidClass;
            this.getFieldElement().classList.add(classToAdd);
        }

        return fieldIsValid;
    }

    /**
     * @param {String} validatorName 
     * @param {Array} parametersForValidator 
     */
    attachValidationMessageLabel(validatorName, parametersForValidator) {
        if(!this.options.silent) {
            const name = this.getFieldElement().getAttribute('name');
            const validationMessages = this.options.validationMessages || {};
    
            let readableName = name.split('_').join(' '); // field_name -> field name
            readableName = readableName.charAt(0).toUpperCase() + readableName.slice(1); // capitalize the name
            const customMessage = validationMessages[name] ? validationMessages[name][validatorName] : undefined;
            const finalMessage = customMessage || defaultValidationMessages[validatorName](readableName, parametersForValidator); // get the translation based on validator name if custom message is not defined
    
            // Create error message
            const textNode = document.createElement('p');
            textNode.setAttribute('data-is-validation-error', '1');
            textNode.style.color = this.options.validationMessageColor;
            textNode.style.marginTop = '0px';
            textNode.innerText = finalMessage;
            this.getFieldElement().parentNode.appendChild(textNode);
        }
    }

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