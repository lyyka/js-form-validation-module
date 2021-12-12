import '../scss/index.scss';
import {validateForm} from '../../../dist/index.js';
import {forms} from './forms';

forms.forEach(formObject => {
    const form = document.querySelector(`#${formObject.formId}`);
    form.querySelector(`#${formObject.formButtonId}`).onclick = function() {
        const {validFormFields, formIsValid} = validateForm(form, formObject.validationRules);

        formObject.callback(form, validFormFields, formIsValid);
    
        // console.log(`Testing form: ${formObject.name}`);
        // console.log(validatedFields);
        // console.log(formIsValid);
    };
});

