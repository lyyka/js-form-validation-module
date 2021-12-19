import '../scss/_global.scss';
import {rules,validateForm} from '../../../dist/index.js';
import {forms} from './components/forms';

forms(rules).forEach(formObject => {
    const form = document.querySelector(`#${formObject.formId}`);
    form.querySelector('button').onclick = function() {

        const options = {
            live: form.querySelector('input[name=live]').checked,
        };

        const {formIsValid} = validateForm(
            form, 
            formObject.validationRules,
            options
        );

        formObject.callback(form, formIsValid);
    };
});

