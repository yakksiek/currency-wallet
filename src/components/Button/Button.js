import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

function Button({ handleClick, children, variant, shape, disabled, type }) {
    const { darkMode } = useSelector((store) => store.darkMode);
    const theme = darkMode ? 'dark' : 'light';

    return (
        <StyledButton
            className="button"
            onClick={handleClick}
            $variant={variant}
            $shape={shape}
            disabled={disabled}
            $darkMode={theme}
            type={type}
        >
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    variant: '',
    shape: '',
    disabled: false,
    handleClick: null,
    type: 'button',
};

Button.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    shape: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
};

const StyledButton = styled.button`
    background-color: ${({ $darkMode, theme }) => theme.palete[$darkMode]['btn-bg']};
    color: ${({ $darkMode, theme }) => theme.palete[$darkMode]['btn-text']};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--button-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 50px;

    & > svg {
        color: ${({ $darkMode, theme }) => theme.palete[$darkMode]['btn-text']};
    }

    &:hover {
        color: white;
        cursor: pointer;
        transition: text-shadow 0.5s;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);

        & > * {
            color: white;
            transition: color 0.5s;
        }
    }

    ${({ $variant }) =>
        $variant === 'transparent' &&
        css`
            && {
                background-color: transparent;
                border: 1px solid var(--accent-color-3);
                /* color: var(--accent-color-3); */
                color: ${({ $darkMode, theme }) => theme.palete[$darkMode]['btn-transparent-text']};
            }

            && > * {
                color: ${({ $darkMode, theme }) => theme.palete[$darkMode]['btn-transparent-text']};
            }

            &&:hover {
                border-color: ${({ $darkMode, theme }) => theme.palete[$darkMode]['btn-hover']};
                transition: border-color 0.5s;
            }

            &&:hover > * {
                color: ${({ $darkMode, theme }) => theme.palete[$darkMode]['btn-hover']};
            }

            &&:hover > svg {
                transform: scale(1.2);
                transition: transform 0.3s;
            }
        `}

    ${({ $shape }) =>
        $shape === 'circle' &&
        css`
            && {
                border-radius: 50%;
                padding: 0.3rem;
                min-height: 0;
                aspect-ratio: 1;
                border-color: ${({ $darkMode, theme }) => theme.palete[$darkMode]['btn-border']};
            }

            & > svg {
                color: ${({ $darkMode, theme }) => theme.palete[$darkMode].text};
            }

            &:disabled > svg {
                color: inherit;
            }
        `}
`;

export default Button;
