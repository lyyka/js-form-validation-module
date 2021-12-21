import Field from './Field';
import {defaultOptions} from '../options.js';

export default class Form {
    /**
     * @param {HTMLElement} form 
     */
    constructor(form) {
        this.form = form;
        this.validationRules = {};
        this.options = {};
        this.fields = [];
        this.isValid = true;
        this.onValidCallback = () => {};
        this.onInvalidCallback = () => {};

        this.getHtmlElement = this.getHtmlElement.bind(this);
        this.getHtmlFields = this.getHtmlFields.bind(this);
        this.initialize = this.initialize.bind(this);
        this.validate = this.validate.bind(this);
        this.revalidate = this.revalidate.bind(this);
        this.handleCallbacksAfterValidation = this.handleCallbacksAfterValidation.bind(this);
        this.onValid = this.onValid.bind(this);
        this.onInvalid = this.onInvalid.bind(this);
        this.destroy = this.destroy.bind(this);
    }

    /**
     * Get form as html element
     * @returns {HTMLElement}
     */
    getHtmlElement() {
        return this.form;
    }

    /**
     * Get all fields from this form
     * @returns {Array}
     */
    getHtmlFields() {
        const result = Array.from(this.form.querySelectorAll('[name]:not([type="checkbox"]):not([type="radio"]):not([data-disable-validation])'));

        // Add only checked checkboxes and radios
        const addChecked = (type) => {
            this.form.querySelectorAll(`[type=${type}]:checked:not([data-disable-validation])`).forEach(el => { result.push(el); });
        };
        addChecked('radio');
        addChecked('checkbox');

        return result;
    }

    /**
     * Sets the validation and options and instantiates all form fields
     * @param {Object} validationRules - An object of validation rules to apply to fields
     * @param {Object} options - An object of options to customize the validation
     * @returns {Form}
     */
    initialize(validationRules, options = {}) {
        this.validationRules = validationRules;
        this.options = {
            ...defaultOptions,
            ...options
        };

        const fieldsToSend = this.getHtmlFields();
        for(let i = 0; i < fieldsToSend.length; i++) {
            const field = new Field(fieldsToSend[i]);
            field.setForm(this);
            field.setValidationRules(
                this.validationRules[field.getFieldName()]
            );
            field.setOptions(this.options);
            this.fields.push(field);
        }

        return this;
    }

    /**
     * Validate the form
     */
    validate() {
        const validFields = [];

        this.isValid = true;

        this.fields.forEach(field => {
            field.reset();

            field.validate();

            if(!field.isValid) {
                this.isValid = false;
            } else if(field.getValidationRules()) {
                validFields.push(field.getFieldElement());
            }
        });

        this.handleCallbacksAfterValidation();

        return { validFields, isValid: this.isValid };
    }

    /**
     * Revalidated based on existing fields states
     * This handles the situation where some fields changed states outside form validation
     */
    revalidate() {
        this.isValid = true;
        for(let i = 0; i < this.fields.length; i++) {
            if(!this.fields[i].isValid) {
                this.isValid = false;
                break;
            }
        }
        this.handleCallbacksAfterValidation();
    }

    /**
     * Handles all set callbacks
     * This gets called after validating the form
     */
    handleCallbacksAfterValidation() {
        if(this.isValid) {
            this.onValidCallback(this);
        } else {
            this.onInvalidCallback(this);
        }
    }

    /**
     * Provide callback function to be called when form is valid
     * @param {CallableFunction} callback 
     * @return {Form}
     */
    onValid(callback) {
        this.onValidCallback = callback;
        return this;
    }

    /**
     * Provide callback function to be called when form is invalid
     * @param {CallableFunction} callback 
     * @return {Form}
     */
    onInvalid(callback) {
        this.onInvalidCallback = callback;
        return this;
    }

    /**
     * Destroys the form, it unbinds its fields event listeners
     */
    destroy() {
        this.fields.forEach(field => {
            field.destroy();
        });
    }
}