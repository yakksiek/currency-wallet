import styled, { css } from 'styled-components';

export const StyledPickerWrapper = styled.div`
    background-color: var(--background-color-2);
    box-shadow: var(--box-shadow-flat);
    border-radius: var(--outer-radius);
    min-width: 300px;

    .header-line {
        background-color: var(--accent-color-3);
        height: 0.5px;
        width: 100%;
    }
`;

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-4);

    .date-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .month {
        font-size: 1.5rem;
    }
`;

export const StyledBody = styled.div`
    padding: 1em;
`;

export const StyledColGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    ${({ $heading }) =>
        $heading &&
        css`
            margin-bottom: 0.5em;
            h5 {
                color: var(--accent-color-3);
            }
        `}
    h5 {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        border: none;
        outline: none;
        background: none;
        padding: 0;
        margin: 0;
        font-family: var(--font-light);
        font-size: 1rem;
        color: var(--font-color-number);
        border: 2px solid transparent;
        cursor: pointer;
        transition: color 0.5s;
        aspect-ratio: 1;
    }

    button:disabled {
        text-decoration: line-through;
        border: none;
    }

    button:hover {
        transform: scale(1.2);
        transition: transform 0.3s;
        font-family: var(--font-medium);
        text-shadow: var(--font-shadow-glow);
    }

    .active {
        font-family: var(--font-semi-bold);
        height: 100%;
        width: 100%;
        border-radius: 50%;
        text-shadow: var(--font-shadow-glow);
    }
`;
