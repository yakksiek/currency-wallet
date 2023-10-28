// import DatePicker from '../components/DatePicker';

export const formFields = [
    {
        label: 'Date',
        name: 'date',
        type: 'date',
        required: true,
        errorMessage: 'Wrong date format',
        element: 'DatePicker',
    },
    {
        label: 'Currency',
        name: 'currency',
        type: 'text',
        required: true,
        errorMessage: 'Cannot recognise currency',
        element: '',
    },
    {
        label: 'Amount',
        name: 'amount',
        type: 'number',
        required: true,
        errorMessage: 'Input must be a number',
        element: '',
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

export const currencies = [
    '🇺🇸 USD', // United States Dollar
    '🇪🇺 EUR', // Euro
    '🇯🇵 JPY', // Japanese Yen
    '🇬🇧 GBP', // British Pound Sterling
    '🇦🇺 AUD', // Australian Dollar
    '🇨🇦 CAD', // Canadian Dollar
    '🇨🇭 CHF', // Swiss Franc
    '🇨🇳 CNY', // Chinese Yuan
    '🇮🇳 INR', // Indian Rupee
    '🇸🇬 SGD', // Singapore Dollar
    '🇳🇿 NZD', // New Zealand Dollar
    '🇭🇰 HKD', // Hong Kong Dollar
    '🇸🇪 SEK', // Swedish Krona
    '🇳🇴 NOK', // Norwegian Krone
    '🇩🇰 DKK', // Danish Krone
    '🇰🇷 KRW', // South Korean Won
    '🇧🇷 BRL', // Brazilian Real
    '🇿🇦 ZAR', // South African Rand
    '🇦🇪 AED', // United Arab Emirates Dirham
    '🇲🇽 MXN', // Mexican Peso
    '🇷🇺 RUB', // Russian Ruble
    '🇹🇭 THB', // Thai Baht
    '🇮🇩 IDR', // Indonesian Rupiah
    '🇲🇾 MYR', // Malaysian Ringgit
];
