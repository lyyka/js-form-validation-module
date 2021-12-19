import '../scss/_global.scss';
import {Form,rules} from '../../../dist/index.js';
import {forms} from './components/forms';

forms(rules).forEach(formObject => {
    const form = document.querySelector(`#${formObject.formId}`);
    const isLiveCheck = form.querySelector('input[name=live]');

    const instantiateForm = () => {
        const options = {
            live: isLiveCheck.checked,
        };
    
        return (new Form(form)).initialize(
            formObject.validationRules,
            options
        );
    };

    let formInstance = instantiateForm();

    isLiveCheck.addEventListener('change', () => { 
        formInstance = instantiateForm(); 
    });

    form.querySelector('button').onclick = function() {
        const {formIsValid} = formInstance.validate();

        formObject.callback(form, formIsValid);
    };
});

