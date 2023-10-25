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

import { StyledThemeSwitch, StyledHeader } from './Header.styled';

function Header() {
    const { toggleTheme } = useDarkMode(darkModeActions.toggleDarkMode);
    const { isOpen } = useSelector((store) => store.form);
    const dispatch = useDispatch();

    const togglePopup = () => {
        dispatch(formActions.toggleForm());
    };

    return (
        <StyledHeader className="element">
            {isOpen && (
                <Popup className="element" handleClick={togglePopup}>
                    <h2>Działa</h2>
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
