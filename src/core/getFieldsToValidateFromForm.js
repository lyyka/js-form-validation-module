/**
 * Gets all HTMLElement fields from form that need to be validated
 * This excludes unchecked checkboxes and radio buttons
 * @param {HTMLElement} form - HTMLElement object
 * @returns {HTMLElement[]} An array of form elements that will go into the validation
 */
export const getFieldsToValidateFromForm = (form) => {
    const result = Array.from(form.querySelectorAll('[name]:not([type="checkbox"]):not([type="radio"])'));

    // Add only checked checkboxes and radios
    const addChecked = (type) => {
        form.querySelectorAll(`[type=${type}]:checked`).forEach(el => { result.push(el); });
    };
    addChecked('radio');
    addChecked('checkbox');

    return result;
};