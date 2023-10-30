import styled from 'styled-components';

export const StyledFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
`;

export const StyledInputWrapper = styled.div`
    /* padding: 0.3em; */
    /* border-radius: 20px; */
    /* border: double 2px transparent; */
    /* background-image: linear-gradient(rgb(51 56 62), rgb(51 56 62)),
        linear-gradient(to right, rgba(75, 81, 84, 1), rgba(52, 57, 63, 1));
    background-origin: border-box;
    background-clip: padding-box, border-box; */
    /* box-shadow: var(--box-shadow-flat); */
`;

export const StyledLabel = styled.label`
    margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
    /* background-color: transparent; */
    width: 100%;
    min-height: var(--min-input-height);
    /* padding: 1.1em 0; */
    /* border-radius: var(--border-radius-inner); */
    border: none;
    /* box-shadow: inset 9px 9px 18px #1c1f22, inset -9px -9px 18px #32373c; */
    /* font-size: 1em; */
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
    margin-top: 0.5rem;
`;

export const StyledDefaultItem = styled.li`
    border: 1px solid var(--accent-color-3);
    border-radius: 100vh;
    padding: 0.5rem;
    font-size: 0.75rem;
    cursor: pointer;
`;
