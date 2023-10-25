import React from 'react';

import Switch from '../Switch';
import { MoonIcon, SunIcon } from '../../assets/icons';

import { StyledThemeSwitch, StyledHeader } from './Header.styled';

function Header() {
    return (
        <StyledHeader className="element">
            Header
            <StyledThemeSwitch>
                <MoonIcon />
                <Switch />
                <SunIcon />
            </StyledThemeSwitch>
        </StyledHeader>
    );
}

export default Header;
