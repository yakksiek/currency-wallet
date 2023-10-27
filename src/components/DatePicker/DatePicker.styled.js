import styled, { css } from 'styled-components';

export const StyledPickerWrapper = styled.div`
    background-color: var(--background-color-2);
    box-shadow: var(--box-shadow-flat);
    border-radius: var(--outer-radius);

    .header-line {
        background-color: var(--font-color-color-2);
        height: 1px;
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
        /* flex: 1 0 0; */
        /* text-align: center; */
        /* margin-bottom: 0.2em; */
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
        font-family: 'PoppinsLight', sans-serif;
        font-size: 1rem;
        color: var(--font-color-number);
        border: 2px solid transparent;
        cursor: pointer;
        transition: color 0.5s;
        aspect-ratio: 1;
    }

    button:disabled {
        text-decoration: line-through;
        /* pointer-events: none; */
        border: none;
    }

    button:hover {
        transform: scale(1.2);
        transition: transform 0.3s;
        font-family: 'PoppinsMedium', sans-serif;
        text-shadow: var(--font-shadow-glow);
    }

    .active {
        /* border-color: var(--color-3); */
        /* background-color: var(--accent-color-1); */
        /* color: white; */
        font-family: 'PoppinsSemiBold', sans-serif;
        /* background-color: var(--color-3); */
        height: 100%;
        width: 100%;
        border-radius: 50%;
        text-shadow: var(--font-shadow-glow);
    }
`;
