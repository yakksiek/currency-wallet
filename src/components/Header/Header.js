import React from 'react';

import { darkModeActions } from '../../features/darkModeSlice';
import useDarkMode from '../../hooks/useDarkMode';
import Switch from '../Switch';
import { MoonIcon, SunIcon } from '../../assets/icons';
import Button from '../Button/Button';

import { StyledThemeSwitch, StyledHeader } from './Header.styled';

function Header() {
    const { toggleTheme } = useDarkMode(darkModeActions.toggleDarkMode);

    const handleClick = () => {
        console.log('clicked');
    };

    return (
        <StyledHeader className="element">
            <Button handleClick={handleClick} />
            <StyledThemeSwitch>
                <MoonIcon />
                <Switch handleClick={toggleTheme} name="darkMode" />
                <SunIcon />
            </StyledThemeSwitch>
        </StyledHeader>
    );
}

export default Header;
