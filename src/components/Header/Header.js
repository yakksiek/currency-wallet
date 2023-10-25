import React from 'react';

import { darkModeActions } from '../../features/darkModeSlice';
import useDarkMode from '../../hooks/useDarkMode';
import Switch from '../Switch';
import { MoonIcon, SunIcon } from '../../assets/icons';

import { StyledThemeSwitch, StyledHeader } from './Header.styled';

function Header() {
    const { toggleTheme } = useDarkMode(darkModeActions.toggleDarkMode);

    return (
        <StyledHeader className="element">
            Header
            <StyledThemeSwitch>
                <MoonIcon />
                <Switch handleClick={toggleTheme} />
                <SunIcon />
            </StyledThemeSwitch>
        </StyledHeader>
    );
}

export default Header;
