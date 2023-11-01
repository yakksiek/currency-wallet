/* eslint-disable import/no-cycle */
import DatePicker from '../components/DatePicker';
import Input from '../components/Input';
import Select from '../components/Select';
import Spinner from '../components/Spinner';

export const currencies = [
    '🇺🇸 USD', // United States Dollar
    '🇪🇺 EUR', // Euro
    '🇬🇧 GBP', // British Pound Sterling
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
        pattern: '^\\d[.]\\d{1,4}$',
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
