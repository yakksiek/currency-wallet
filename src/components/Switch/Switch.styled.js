/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledFieldWrapper = styled.div`
    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 25px;
        margin: 0 0.75rem;
    }

    .toggle-switch input[type='checkbox'] {
        display: none;
    }

    .toggle-switch .switch {
        position: absolute;
        cursor: pointer;
        background-color: #b6b6b6;
        background-color: var(--dark-color-3);
        border-radius: 25px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: background-color 0.2s ease;
    }

    .toggle-switch .switch::before {
        position: absolute;
        content: '';
        left: 2px;
        top: 2px;
        width: 21px;
        height: 21px;
        background-color: var(--accent-color-3);
        border-radius: 50%;
        transition: transform 0.3s ease;
    }

    .toggle-switch input[type='checkbox']:checked + .switch::before {
        transform: translateX(25px);
        background-color: var(--accent-color-3);
    }

    .toggle-switch input[type='checkbox']:checked + .switch {
        background-color: var(--dark-color-3);
    }
`;
