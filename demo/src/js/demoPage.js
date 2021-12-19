import '~/_global.scss';
import {Form,rules} from '../../../dist/index.js';
import {forms} from '@/components/forms';

const searchField = document.querySelector('#search');
searchField.addEventListener('input', () => {
    const value = searchField.value;
    const allForms = document.querySelectorAll('form');
    console.clear();
    allForms.forEach(form => {
        const parent = form.parentNode;
        const section = parent.parentNode;
        const searchables = parent.querySelectorAll('[data-searchable]');
        for(let i = 0; i < searchables.length; i++) {
            const text = searchables[i].innerText.toLowerCase().trim();
            const searchString = value.toLowerCase().trim();
            if(text.includes(searchString) || !value) {
                section.style.display = 'block';
                break;
            } else {
                section.style.display = 'none';
            }
        }
    });
});

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

