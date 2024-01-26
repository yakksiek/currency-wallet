/* eslint-disable no-else-return */
/* global navigator */
import React from 'react';
// eslint-disable-next-line import/no-cycle
import * as db from '../data';

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

        const { pattern, required, name } = validationField;

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

export function formatTimeDifference(timestamp) {
    const currentTime = new Date();
    const targetTime = new Date(timestamp * 1000);

    const timeDifference = currentTime - targetTime;

    const secondsAgo = Math.floor(timeDifference / 1000);

    if (secondsAgo < 60) {
        // Less than a minute
        return 'updated a few seconds ago';
    } else if (secondsAgo < 3600) {
        // Less than an hour
        const minutesAgo = Math.floor(secondsAgo / 60);
        return `updated ${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
    } else if (secondsAgo < 86400) {
        // Less than a day
        const hoursAgo = Math.floor(secondsAgo / 3600);
        return `updated ${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
    } else {
        // More than a day
        const daysAgo = Math.floor(secondsAgo / 86400);
        return `updated ${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
    }
}

export function sortByKeyDateString(objectsArr) {
    const sortedArr = objectsArr.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedArr;
}

export const calculateProfitLoss = (transaction, currentRates) => {
    const { currency, price, amount } = transaction;
    const [_, symbol] = currency.split(' ');
    const rate = !currentRates ? 0 : (currentRates.rates[symbol] / 1).toFixed(4);

    const volume = parseFloat(amount);
    const totalPrice = parseFloat(price) * volume;
    const currentPrice = rate * volume;
    const profitLoss = !currentRates ? 0 : currentPrice - totalPrice;

    return { profitLoss, symbol, currentPrice, totalPrice, currentRate: rate };
};

export function formatDateToMonthYear(dateObj) {
    const date = new Date(dateObj);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${year}`;
}

export function extractAndSortDates(objectsArr) {
    const dateArray = objectsArr.map((item) => formatDateToMonthYear(item.date));

    dateArray.sort();
    const uniqueDates = [...new Set(dateArray)];

    return uniqueDates;
}

export function formatDateToMonthInfo(date) {
    const transactionDate = new Date(date);
    const now = new Date();

    const yearDifference = now.getFullYear() - transactionDate.getFullYear();
    const monthDifference = now.getMonth() - transactionDate.getMonth();
    const totalMonthsAgo = yearDifference * 12 + monthDifference;
    const formattedDate = transactionDate.toLocaleDateString();

    const timeConditions = [
        {
            check: () => totalMonthsAgo === 0,
            format: () => 'this month',
        },
        {
            check: () => totalMonthsAgo > 0 && totalMonthsAgo < 12,
            format: () => `${totalMonthsAgo} month${totalMonthsAgo === 1 ? '' : 's'} ago`,
        },
        {
            check: () => totalMonthsAgo >= 12 && yearDifference === 1,
            format: () => `${totalMonthsAgo} months ago`,
        },
        {
            check: () => yearDifference >= 2,
            format: () => `${db.months[transactionDate.getMonth()]} ${transactionDate.getFullYear()}`,
        },
    ];

    const formattedString = timeConditions.find((condition) => condition.check()).format();

    return (
        <p>
            {formattedDate} <span className="date">({formattedString})</span>
        </p>
    );
}
