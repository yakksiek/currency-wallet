// import Validation from './validationBuilder';
// import * as db from './../data';

// export function getFieldsData(state) {
//     const fieldsData = Object.assign({}, state);
//     delete fieldsData['errors'];

//     return fieldsData;
// }

// export function validate(validationFields, inputElementsArr) {
//     let errors = {};
//     inputElementsArr.forEach((input) => {
//         const { name: inputName, value: inputValue } = input;
//         const validationField = validationFields.find((el) => el.name === inputName);
//         if (!validationField) throw new Error('no validation field');

//         const { label, pattern, required, name } = validationField;

//         if (required) {
//             if (inputValue.length === 0) {
//                 const message = `[${label}] input is required`;
//                 errors = { ...errors, [name]: message };
//                 return;
//             }
//         }

//         if (pattern) {
//             const reg = new RegExp(pattern);
//             const isPatternMatch = reg.test(inputValue);
//             if (!isPatternMatch) {
//                 const message = `Provided data in [${label}] not valid`;
//                 errors = { ...errors, [name]: message };
//             }
//         }
//     });

//     return errors;
// }

// export function customValidation(formFields, formData) {
//     const fields = getFieldsData(formData);
//     const errors = formFields.reduce((acc, field) => {
//         const { name, required, label } = field;
//         const isFieldEmpty = fields[name].length === 0;
//         if (!required || !isFieldEmpty) return acc;

//         return { ...acc, [name]: `[${label}] input is required` };
//     }, {});

//     return errors;
// }

// export function findInputElementsInForm(form) {
//     const inputElements = Array.from(form.elements).filter(
//         (element) => element.tagName.toLowerCase() === 'input' && element.type !== 'submit',
//     );

//     return inputElements;
// }

// export function checkErrors(objectsArr) {
//     const options = { shouldReturn: true };
//     const isClean = objectsArr.every((obj) => Validation.setValue(obj).isObjectEmpty(options));

//     return isClean;
// }

export function getNumbersOfDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

export function getSortedDays(year, month, dayNames) {
    const dayIndex = new Date(year, month, 1).getDay();
    const firstHalf = dayNames.slice(dayIndex);

    return [...firstHalf, ...dayNames.slice(0, dayIndex)];
}

export function range(start, end) {
    const length = Math.abs(end - start) / 1;

    const { result } = Array.from({ length }).reduce(
        // eslint-disable-next-line no-shadow
        ({ result, current }) => ({
            result: [...result, current],
            current: current + 1,
        }),
        { result: [], current: start },
    );

    return result;
}

// export function generate24HoursArray() {
//     const hours = [];
//     for (let i = 0; i < 24; i++) {
//         const hour = i.toString().padStart(2, '0');
//         hours.push(hour);
//     }
//     return hours;
// }

export function getYesterday() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return yesterday;
}

// export function getDayNameAndDay(dateString) {
//     const date = new Date(dateString);

//     const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     const dayOfWeek = date.getDay();
//     const dayOfMonth = date.getDate();
//     const dayName = dayNames[dayOfWeek];

//     return {
//         dayName,
//         day: dayOfMonth,
//     };
// }

// export function sortMeetingsByMonthDayAndTime(meetings) {
//     function compareMeetings(a, b) {
//         const dateA = new Date(a.date);
//         const dateB = new Date(b.date);

//         const monthComparison = dateA.getMonth() - dateB.getMonth();

//         if (monthComparison !== 0) {
//             return monthComparison;
//         }

//         const dayComparison = dateA.getDate() - dateB.getDate();

//         if (dayComparison !== 0) {
//             return dayComparison;
//         }

//         const timeA = a.time;
//         const timeB = b.time;

//         return timeA.localeCompare(timeB);
//     }

//     meetings.sort(compareMeetings);

//     return meetings;
// }
