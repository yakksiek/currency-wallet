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
        label: 'Price for 1 🇪🇺',
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

export const responseData = {
    success: true,
    timestamp: 1705753204,
    base: 'EUR',
    date: '2024-01-20',
    rates: {
        AED: 4.008391,
        AFN: 78.791335,
        ALL: 103.991509,
        AMD: 439.763476,
        ANG: 1.962038,
        AOA: 904.575847,
        ARS: 893.298021,
        AUD: 1.653727,
        AWG: 1.964628,
        AZN: 1.859815,
        BAM: 1.955638,
        BBD: 2.198118,
        BDT: 119.480132,
        BGN: 1.955638,
        BHD: 0.410366,
        BIF: 3104.343609,
        BMD: 1.09146,
        BND: 1.459979,
        BOB: 7.522379,
        BRL: 5.368557,
        BSD: 1.08871,
        BTC: 2.6222029e-5,
        BTN: 90.429731,
        BWP: 14.882771,
        BYN: 3.562706,
        BYR: 21392.613158,
        BZD: 2.194419,
        CAD: 1.469378,
        CDF: 2903.283609,
        CHF: 0.947725,
        CLF: 0.036021,
        CLP: 991.168138,
        CNY: 7.768033,
        COP: 4266.247645,
        CRC: 560.35372,
        CUC: 1.09146,
        CUP: 28.923686,
        CVE: 110.255894,
        CZK: 24.826787,
        DJF: 193.833991,
        DKK: 7.468904,
        DOP: 63.974716,
        DZD: 146.619121,
        EGP: 33.668219,
        ERN: 16.371898,
        ETB: 61.585314,
        EUR: 1,
        FJD: 2.440181,
        FKP: 0.861109,
        GBP: 0.859147,
        GEL: 2.89787,
        GGP: 0.861109,
        GHS: 13.172912,
        GIP: 0.861109,
        GMD: 73.401101,
        GNF: 9356.227258,
        GTQ: 8.513297,
        GYD: 227.941174,
        HKD: 8.531451,
        HNL: 26.843783,
        HRK: 7.509594,
        HTG: 143.448152,
        HUF: 382.458871,
        IDR: 17048.220925,
        ILS: 4.085935,
        IMP: 0.861109,
        INR: 90.727546,
        IQD: 1426.18221,
        IRR: 45882.247823,
        ISK: 149.148411,
        JEP: 0.861109,
        JMD: 169.286018,
        JOD: 0.774286,
        JPY: 161.689283,
        KES: 173.365682,
        KGS: 97.48647,
        KHR: 4437.633491,
        KMF: 494.431697,
        KPW: 982.309253,
        KRW: 1458.032148,
        KWD: 0.335985,
        KYD: 0.907225,
        KZT: 489.659558,
        LAK: 22512.140695,
        LBP: 16362.548598,
        LKR: 348.82119,
        LRD: 206.559194,
        LSL: 20.639922,
        LTL: 3.222798,
        LVL: 0.660214,
        LYD: 5.242567,
        MAD: 10.829106,
        MDL: 19.213413,
        MGA: 4964.589969,
        MKD: 61.514919,
        MMK: 2286.211179,
        MNT: 3742.588359,
        MOP: 8.768776,
        MRU: 43.167651,
        MUR: 48.338708,
        MVR: 16.812565,
        MWK: 1832.648639,
        MXN: 18.648033,
        MYR: 5.145184,
        MZN: 69.034782,
        NAD: 20.639918,
        NGN: 972.534801,
        NIO: 39.866707,
        NOK: 11.41905,
        NPR: 144.68805,
        NZD: 1.781685,
        OMR: 0.419065,
        PAB: 1.08861,
        PEN: 4.073264,
        PGK: 4.071664,
        PHP: 60.995693,
        PKR: 304.715933,
        PLN: 4.362249,
        PYG: 7927.345271,
        QAR: 3.973842,
        RON: 4.988379,
        RSD: 117.20632,
        RUB: 97.609662,
        RWF: 1399.984374,
        SAR: 4.093694,
        SBD: 9.211288,
        SCR: 14.597794,
        SDG: 655.967743,
        SEK: 11.422022,
        SGD: 1.463434,
        SHP: 1.387795,
        SLE: 24.756248,
        SLL: 21556.332506,
        SOS: 623.223946,
        SRD: 39.875436,
        STD: 22591.01535,
        SYP: 14190.988219,
        SZL: 20.676292,
        THB: 38.750812,
        TJS: 11.871819,
        TMT: 3.820109,
        TND: 3.396082,
        TOP: 2.583213,
        TRY: 32.965403,
        TTD: 7.401389,
        TWD: 34.270534,
        TZS: 2737.973867,
        UAH: 40.845127,
        UGX: 4142.657853,
        USD: 1.09146,
        UYU: 42.786466,
        UZS: 13439.889983,
        VEF: 3939416.121161,
        VES: 39.39379,
        VND: 26795.339441,
        VUV: 131.116172,
        WST: 3.00235,
        XAF: 655.902828,
        XAG: 0.048256,
        XAU: 0.000538,
        XCD: 2.949725,
        XDR: 0.818032,
        XOF: 655.902828,
        XPF: 119.331742,
        YER: 273.247372,
        ZAR: 20.253926,
        ZMK: 9824.452366,
        ZMW: 28.767624,
        ZWL: 351.449628,
    },
};