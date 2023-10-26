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
