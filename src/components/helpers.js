/* global navigator */

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

export function formatCurrency(value, locale = 'en-US', currencySymbol = 'PLN') {
    console.log(value);
    // Parse the input string to a number
    const numericValue = parseFloat(value);

    // Check if it's a valid number
    if (Number.isNaN(numericValue)) {
        return 'Invalid Number';
    }

    // Use the toLocaleString function to format as currency
    return numericValue.toLocaleString(locale, {
        style: 'currency',
        currency: currencySymbol,
    });
}
