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

function Header() {
    const { toggleTheme } = useDarkMode(darkModeActions.toggleDarkMode);
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
                <Popup className="element" handleClick={togglePopup}>
                    <DatePicker fieldData={expandedData} />
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
