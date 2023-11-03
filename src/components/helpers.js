/* global navigator */
import React from 'react';

export function getNumbersOfDaysInMonth(year, month) {
    const date = new Date(year, month, 1);

    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);

    const daysInMonth = date.getDate();

    return daysInMonth;
}

export function getSortedDays(year, month, dayNames) {
    const dayIndex = new Date(year, month, 1).getDay();
    const firstHalf = dayNames.slice(dayIndex);

    return [...firstHalf, ...dayNames.slice(0, dayIndex)];
}

export function createNumberRangeArray(min, max) {
    const result = [];
    for (let i = min; i <= max; ) {
        result.push(i);
        i += 1;
    }
    return result;
}

export function getToday() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate());
    return yesterday;
}

export function dateToISOString(dateObj) {
    const isDateObj = dateObj instanceof Date;
    if (!isDateObj) throw new Error('not a date obj');

    return new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60000).toISOString();
}

export function getUserLocale() {
    const userLanguage = navigator.language || navigator.userLanguage;

    return userLanguage;
}

export function formatNumber(numberString, locale) {
    try {
        const number = parseFloat(numberString);

        if (Intl.NumberFormat.supportedLocalesOf(locale).length === 0) {
            return 'Unsupported locale';
        }

        return new Intl.NumberFormat(locale).format(number);
    } catch (error) {
        return 'Invalid number';
    }
}

export function validate(validationFields, inputElementsArr) {
    let errors = {};
    inputElementsArr.forEach((input) => {
        const { name: inputName, value: inputValue } = input;
        const validationField = validationFields.find((el) => el.name === inputName);
        if (!validationField) throw new Error('no validation field');

        const { label, pattern, required, name } = validationField;

        if (required) {
            if (inputValue.length === 0) {
                const message = `Value is required`;
                errors = { ...errors, [name]: message };
                return;
            }
        }

        if (pattern) {
            const reg = new RegExp(pattern);
            const isPatternMatch = reg.test(inputValue);
            if (!isPatternMatch) {
                const message = `Provided input in wrong format`;
                errors = { ...errors, [name]: message };
            }
        }
    });

    return errors;
}

export function findInputElementsInForm(form) {
    const inputElements = Array.from(form.elements).filter(
        (element) => element.tagName.toLowerCase() === 'input' && element.name,
    );

    return inputElements;
}

export function customValidation(formFields, formData) {
    const errors = formFields.reduce((acc, field) => {
        const { name, required, label } = field;
        const isFieldEmpty = formData[name].length === 0;
        if (!required || !isFieldEmpty) return acc;

        return { ...acc, [name]: `Value is required` };
    }, {});

    return errors;
}

export function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function checkErrors(objectsArr) {
    const isClean = objectsArr.every((obj) => isObjectEmpty(obj));

    return isClean;
}

export function getCurrencySymbols(objArr) {
    const currencySymbols = new Set(
        objArr.map((item) => {
            const [_, symbol] = item.currency.split(' ');
            return symbol;
        }),
    );

    return [...currencySymbols];
}

export function removeObjectById(id, array) {
    return array.filter((item) => item.id !== id);
}
