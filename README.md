# JS Form Validation Module

## Usage

You should include `dist/index.js` file into your project. This file contains the build of the library.

## Functions and parameters

Below is the list of functions and their parameters.

## 1. `validateForm`

### 1.1 `form`

An HTMLElement object of the form.

### 1.2 `validationRules`

An object containing validation rules for fields.

```js
{
    field1: ['required', 'string'],
    field2: ['required', 'string'],
    ...
}
```

### 1.3 `options`

Lets you specifiy additional options. Below are all of them explained.

#### 1.3.1 `validationMessages`

This is an empty object by default. It lets you specify which message should pop-up for each field for each rule, if the field fails that rule.

```js
validationMessages: {
    field1: {
        required: 'Field1 is required!',
        string: 'Field1 must be a string!',
    }
}
```

Default: **{}**

### 1.3.2 `silent`

Specifies weather the module should add classess to elements and append validation failure messages to their parents.

```js
silent: true|false
```

Default: **false**

### 1.3.3 `validClass`

Specifies which class to add to inputs that are valid. Will only work if `silent` is `true`

```js
validClass: 'valid-input'
```

Default: **'valid'**

### 1.3.3 `invalidClass`

Specifies which class to add to inputs that are invalid. Will only work if `silent` is `true`

```js
invalidClass: 'invalid-input'
```

Default: **'invalid'**

### 1.3.4 `validationMessageColor`

Specifies the color of validation messages that appear below input fields. Will only work if `silent` is `true`

```js
validationMessageColor: 'red'
```

Default: **'red'**
