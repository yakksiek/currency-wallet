/* eslint-disable import/no-cycle */
import DatePicker from '../components/DatePicker';
import Input from '../components/Input';
import Select from '../components/Select';
import Spinner from '../components/Spinner';

export const currencies = [
    '🇺🇸 USD', // United States Dollar
    '🇬🇧 GBP', // British Pound Sterling
    '🇨🇭 CHF', // Swiss Franc
    '🇦🇺 AUD', // Australian Dollar
    '🇵🇱 PLN',
];

// export const currencies = [
//     '🇺🇸 USD', // United States Dollar
//     '🇪🇺 EUR', // Euro
//     '🇯🇵 JPY', // Japanese Yen
//     '🇬🇧 GBP', // British Pound Sterling
//     '🇦🇺 AUD', // Australian Dollar
//     '🇨🇦 CAD', // Canadian Dollar
//     '🇨🇭 CHF', // Swiss Franc
//     '🇨🇳 CNY', // Chinese Yuan
//     '🇮🇳 INR', // Indian Rupee
//     '🇸🇬 SGD', // Singapore Dollar
//     '🇳🇿 NZD', // New Zealand Dollar
//     '🇭🇰 HKD', // Hong Kong Dollar
//     '🇸🇪 SEK', // Swedish Krona
//     '🇳🇴 NOK', // Norwegian Krone
//     '🇩🇰 DKK', // Danish Krone
//     '🇰🇷 KRW', // South Korean Won
//     '🇧🇷 BRL', // Brazilian Real
//     '🇿🇦 ZAR', // South African Rand
//     '🇦🇪 AED', // United Arab Emirates Dirham
//     '🇲🇽 MXN', // Mexican Peso
//     '🇷🇺 RUB', // Russian Ruble
//     '🇹🇭 THB', // Thai Baht
//     '🇮🇩 IDR', // Indonesian Rupiah
//     '🇲🇾 MYR', // Malaysian Ringgit
// ];

export const formFields = [
    {
        label: 'Currency',
        name: 'currency',
        type: 'text',
        required: true,
        errorMessage: 'Cannot recognise currency',
        element: Select,
        group: 1,
        optionsList: currencies,
        placeholder: 'choose currency ',
    },
    {
        label: 'Date',
        name: 'date',
        type: 'date',
        required: true,
        errorMessage: 'Wrong date format',
        element: DatePicker,
        group: 1,
    },

    {
        label: 'Price in PLN',
        name: 'price',
        type: 'text',
        required: true,
        errorMessage: 'Input must be a number',
        element: Input,
        placeholder: '0,00',
        group: 2,
        loader: Spinner,
        pattern: '^\\d{1,9}[.,]\\d{1,9}$',
    },
    {
        label: 'Amount of currency bought',
        name: 'amount',
        type: 'number',
        required: true,
        errorMessage: 'Input must be a number',
        element: Input,
        placeholder: '0',
        defaultValues: ['100', '250', '500', '1000', '5000'],
        group: 2,
        pattern: '\\d{1,3}(?:[.,]\\d{3})*(?:[.,]\\d{2})?',
    },
];

export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const columnHeadings = [
    'Date',
    'Symbol',
    'Volume',
    'Rates',
    'Current rates',
    'Value',
    'Current Value',
    'Profit',
];

export const chartColors = [' rgb(0 108 255)', 'rgb(76 51 205)', 'rgb(87 87 87)', 'rgb(31 181 74)'];

// const currentRates = {
//     EUR: 4.49,
//     USD: 4.2701,
//     GBP: 5.172,
// };

// const data = [
//     {
//         date: '2023-10-11T00:00:00.000Z',
//         currency: '🇪🇺 EUR',
//         price: '4.5263',
//         amount: '500',
//         id: 'a9a8f6be-ad4d-4c89-881f-b3262a04a7e7',
//     },
//     {
//         date: '2023-10-01T00:00:00.000Z',
//         currency: '🇺🇸 USD',
//         price: '4.3741',
//         amount: '500',
//         id: 'bf63028e-e5f9-4813-8d21-f6402c9058a9',
//     },
//     {
//         date: '2023-08-01T00:00:00.000Z',
//         currency: '🇪🇺 EUR',
//         price: '4.4495',
//         amount: '100',
//         id: '55b52c41-5f67-4491-85a3-586da5a83058',
//     },
//     {
//         date: '2023-10-09T00:00:00.000Z',
//         currency: '🇬🇧 GBP',
//         price: '5.2845',
//         amount: '250',
//         id: '81e292c0-39a1-4892-8a12-50480bb2515d',
//     },
//     {
//         date: '2023-10-11T00:00:00.000Z',
//         currency: '🇪🇺 EUR',
//         price: '4.5263',
//         amount: '500',
//         id: 'a9a8fsssdf6be-ad4d-4c89-881f-b3262a04a7e7',
//     },
//     {
//         date: '2023-10-01T00:00:00.000Z',
//         currency: '🇺🇸 USD',
//         price: '4.3741',
//         amount: '500',
//         id: 'bf6302fds38e-e5f9-4813-8d21-f6402c9058a9',
//     },
//     {
//         date: '2023-08-01T00:00:00.000Z',
//         currency: '🇪🇺 EUR',
//         price: '4.4495',
//         amount: '100',
//         id: '55b52fsdf24c41-5f67-4491-85a3-586da5a83058',
//     },
//     {
//         date: '2023-10-09T00:00:00.000Z',
//         currency: '🇬🇧 GBP',
//         price: '5.2845',
//         amount: '250',
//         id: '81e292cfsdf230-39a1-4892-8a12-50480bb2515d',
//     },
//     {
//         date: '2023-10-11T00:00:00.000Z',
//         currency: '🇪🇺 EUR',
//         price: '4.5263',
//         amount: '500',
//         id: 'a9a8asdff6be-ad4d-4c89-881f-b3262a04a7e7',
//     },
//     {
//         date: '2023-10-01T00:00:00.000Z',
//         currency: '🇺🇸 USD',
//         price: '4.3741',
//         amount: '500',
//         id: 'bf630adffew28e-e5f9-4813-8d21-f6402c9058a9',
//     },
//     {
//         date: '2023-08-01T00:00:00.000Z',
//         currency: '🇪🇺 EUR',
//         price: '4.4495',
//         amount: '100',
//         id: '55b5we2c41-5f67-4491-85a3-586da5a83058',
//     },
//     {
//         date: '2023-10-09T00:00:00.000Z',
//         currency: '🇬🇧 GBP',
//         price: '5.2845',
//         amount: '250',
//         id: '81e292ec0-39a1-4892-8a12-50480bb2515d',
//     },
// ];
