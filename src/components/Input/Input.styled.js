import styled from 'styled-components';

export const StyledFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    min-width: var(--min-input-width);
`;

export const StyledInputWrapper = styled.div`
    position: relative;

    .spinner-wrapper {
        position: absolute;
        top: 35%;
        left: 30%;
    }
`;

export const StyledLabel = styled.label`
    margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
    width: 100%;
    min-height: var(--min-input-height);
    border: none;
    color: var(--font-color-1);
    text-align: center;
    caret-color: var(--color-3);
    && {
        padding: 1rem;
    }

    &:focus {
        outline: 2px solid var(--color-3);
    }
`;

export const StyledDefaultList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin-top: 0.75rem;
`;

export const StyledDefaultItem = styled.li`
    border: 1px solid var(--accent-color-3);
    border-radius: 100vh;
    padding: 0.5rem;
    font-size: 0.75rem;
    cursor: pointer;
    font-family: var(--font-semi-bold);

    &:hover {
        color: var(--color-3);
        border-color: var(--color-3);
        transition: color 0.3s, border-color 0.3s;
    }
`;
