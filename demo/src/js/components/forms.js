let timeout = undefined;

const defaultCallback = (form) => {
    if(timeout) {
        clearTimeout(timeout);
    }
    const button = form.getHtmlElement().querySelector('button');
    button.innerText = form.isValid ? 'Form is valid! 🎉' : 'Error 😔';
    timeout = setTimeout(() => {
        button.innerText = 'Submit';
    }, 5000);
};

export const forms = (rules) => [
    {
        name: 'Required rule',
        formId: 'test-required-validation',
        validationRules: {
            first_name: [rules.required()],
        },
        callback: defaultCallback,
    },
    {
        name: 'String rule',
        formId: 'test-string-validation',
        validationRules: {
            first_name: [rules.string()],
        },
        callback: defaultCallback,
    },
    {
        name: 'Min. string len. rule',
        formId: 'test-min-str-len-validation',
        validationRules: {
            first_name: [rules.minStrLen(5)],
        },
        callback: defaultCallback,
    },
    {
        name: 'Max. string len. rule',
        formId: 'test-max-str-len-validation',
        validationRules: {
            first_name: [rules.maxStrLen(5)],
        },
        callback: defaultCallback,
    },
    {
        name: 'Email rule',
        formId: 'test-email-validation',
        validationRules: {
            email: [rules.email()],
        },
        callback: defaultCallback,
    },
    {
        name: 'In rule',
        formId: 'test-in-validation',
        validationRules: {
            favourite_color: [rules.in([
                'red', 'green', 'blue',
            ])],
        },
        callback: defaultCallback,
    },
    {
        name: 'Between rule',
        formId: 'test-between-validation',
        validationRules: {
            age: [rules.between([18,24])],
        },
        callback: defaultCallback,
    },
    {
        name: 'GT rule',
        formId: 'test-gt-validation',
        validationRules: {
            number: [rules.gt(50)],
        },
        callback: defaultCallback,
    },
    {
        name: 'GTE rule',
        formId: 'test-gte-validation',
        validationRules: {
            number: [rules.gte(50)],
        },
        callback: defaultCallback,
    },
    {
        name: 'LT rule',
        formId: 'test-lt-validation',
        validationRules: {
            number: [rules.lt(50)],
        },
        callback: defaultCallback,
    },
    {
        name: 'LTE rule',
        formId: 'test-lte-validation',
        validationRules: {
            number: [rules.lte([50])],
        },
        callback: defaultCallback,
    },
    {
        name: 'Date rule',
        formId: 'test-date-validation',
        validationRules: {
            birthday: [rules.date()],
            birthday_date: [rules.date()],
        },
        callback: defaultCallback,
    },
];