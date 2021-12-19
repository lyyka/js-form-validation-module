import Field from './Field';
import {defaultOptions} from './../../options.js';

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

        this.getHtmlElement = this.getHtmlElement.bind(this);
        this.getHtmlFields = this.getHtmlFields.bind(this);
        this.initialize = this.initialize.bind(this);
        this.validate = this.validate.bind(this);
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
        const result = Array.from(this.form.querySelectorAll('[name]:not([type="checkbox"]):not([type="radio"])'));

        // Add only checked checkboxes and radios
        const addChecked = (type) => {
            this.form.querySelectorAll(`[type=${type}]:checked`).forEach(el => { result.push(el); });
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

        if(this.isValid) {
            this.onValidCallback(this);
        }

        return { validFields, isValid: this.isValid };
    }

    /**
     * Provide callback function to be called when form is valid
     * This can be used with live validation to provide auto-validation on a form
     * @param {CallableFunction} callback 
     * @return {Form}
     */
    onValid(callback) {
        this.onValidCallback = callback;
        return this;
    }
}