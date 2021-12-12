import {rules} from '../../../dist/index.js';

/**
 * @param {HTMLElement} form 
 * @param {Array} validFormFields 
 * @param {boolean} formIsValid 
 */
const defaultCallback = (form, validFormFields, formIsValid) => {
    if(formIsValid) {
        form.querySelectorAll('[custom-feedback-message]').forEach(el => { el.parentNode.removeChild(el); });

        // Render a label to show that form is valid
        const el = document.createElement('p');
        el.setAttribute('custom-feedback-message', 1);
        el.style.color='green';
        el.innerText = 'Form is valid! 🎉';
        form.appendChild(el);

        // Render a label to show all valid field names
        const validFields = document.createElement('p');
        const fieldNames = validFormFields.map((field) => {
            return field.getAttribute('name');
        });
        validFields.setAttribute('custom-feedback-message', 1);
        validFields.style.color='green';
        validFields.innerText = `Valid fields: ${fieldNames.join(', ')}`;
        form.appendChild(validFields);

        setTimeout(() => {
            form.removeChild(el);
            form.removeChild(validFields);
        }, 5000);
    }
};

export const forms = [
    {
        name: 'Basic form',
        formId: 'test-form',
        formButtonId: 'test-form-submit',
        validationRules: {
            first_name: [rules.required(), rules.string()],
            last_name: [rules.required(), rules.string()],
        },
        callback: defaultCallback,
    },
    {
        name: 'Form with select element',
        formId: 'test-form-select',
        formButtonId: 'test-form-submit-select',
        validationRules: {
            favourite_color: [
                rules.required(), 
                rules.in(['red', 'blue', 'green'])
            ],
            full_name: [rules.required(), rules.string()],
        },
        callback: defaultCallback,
    },
    {
        name: 'Email validation',
        formId: 'test-form-email-validation',
        formButtonId: 'test-form-submit-email-validation',
        validationRules: {
            email: [
                rules.required(), 
                rules.email(),
            ],
        },
        callback: defaultCallback,
    },
];