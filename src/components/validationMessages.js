export const defaultValidationMessages = {
    'required': (fieldName) => `${fieldName} field is required`,
    'string': (fieldName) => `${fieldName} must be string`,
    'email': (fieldName) => `${fieldName} must be an email string`,
    'in': (fieldName) => `${fieldName} value is invalid`,
    'between': (fieldName, params) => `${fieldName} value must be between ${params[0]} and ${params[1]}`,
    'gt': (fieldName, params) => `${fieldName} value must be greater then ${params[0]}`,
    'gte': (fieldName, params) => `${fieldName} value must be greater then or equal to ${params[0]}`,
    'lt': (fieldName, params) => `${fieldName} value must be greater then ${params[0]}`,
    'lte': (fieldName, params) => `${fieldName} value must be less then or equal to ${params[0]}`,
    'date': (fieldName) => `${fieldName} value is not a valid date string`,
    'minStrLen': (fieldName, params) => `${fieldName} must have at least ${params[0]} characters`,
    'maxStrLen': (fieldName, params) => `${fieldName} must not have more than ${params[0]} characters`,
};