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
    
        let instance = (new Form(form))
            .initialize(
                formObject.validationRules,
                options
            );

        if(options.live) {
            instance = instance.onValid(formObject.callback)
                .onInvalid(formObject.callback);
        }

        return instance;
    };

    let formInstance = instantiateForm();

    isLiveCheck.addEventListener('change', () => { 
        formInstance.destroy();
        formInstance = instantiateForm(); 
    });

    form.querySelector('button').onclick = function() {
        formInstance.validate();
        formObject.callback(formInstance);
    };
});

