import React from 'react';
import { UilTransaction } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';

import { darkModeActions } from '../../features/darkModeSlice';
import { formActions } from '../../features/formSlice';
import useDarkMode from '../../hooks/useDarkMode';
import Switch from '../Switch';
import { MoonIcon, SunIcon } from '../../assets/icons';
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';
import Popup from '../Popup';
import DatePicker from '../DatePicker';
import Select from '../Select';
import * as db from '../../data';

import { StyledThemeSwitch, StyledHeader } from './Header.styled';

const data = {
    label: 'Date',
    name: 'date',
    type: 'date',
    required: true,
    errorMessage: 'Wrong date format',
    element: 'DatePicker',
    value: '',
};

const currencyData = {
    label: 'Currency',
    name: 'currency',
    type: 'currency',
    required: true,
    errorMessage: 'Pick currency to load the price',
    element: 'TimePicker',
    group: 2,
};

function Header() {
    const { toggleTheme } = useDarkMode(darkModeActions.toggleDarkMode);
    const { currency } = useSelector((store) => store.form);
    const {
        isOpen,
        formData: { date },
    } = useSelector((store) => store.form);
    const dispatch = useDispatch();

    const togglePopup = () => {
        dispatch(formActions.toggleForm());
    };

    const expandedData = { ...data, value: date };

    return (
        <StyledHeader className="element">
            {isOpen && (
                <Popup handleClick={togglePopup} classes="element">
                    <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', minWidth: '500px' }}>
                        <DatePicker fieldData={expandedData} />
                        <Select
                            optionsList={db.currencies}
                            placeholder="choose currency"
                            name="currency"
                            value={currency}
                        />
                    </div>
                </Popup>
            )}
            <Button handleClick={togglePopup}>
                <Wrapper as="icon">
                    <UilTransaction />
                </Wrapper>
                Add transaction
            </Button>
            <StyledThemeSwitch>
                <MoonIcon />
                <Switch handleClick={toggleTheme} name="darkMode" />
                <SunIcon />
            </StyledThemeSwitch>
        </StyledHeader>
    );
}

export default Header;
