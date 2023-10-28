import styled, { css } from 'styled-components';

const StyledCustomSelect = styled.div`
    background-color: lightseagreen;
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    outline: none;
    cursor: pointer;
    position: relative;
    min-width: 250px;
    min-height: 50px;
    /* background-color: var(--background-color-2); */
    /* box-shadow: var(--box-shadow-flat); */
    /* border-radius: var(--outer-radius); */
    border-radius: 1rem;
    width: 100%;

    ${({ $listVisible }) =>
        $listVisible &&
        css`
            display: block;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        `};

    ${({ $listVisible }) =>
        !$listVisible &&
        css`
            &:focus {
                outline: 2px solid var(--color-3);
                z-index: 2;
            }
            &:hover {
                & > * {
                    color: #fff;
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
                }
            }
        `}
`;

const StyledValue = styled.span`
    padding: 0.5rem 0;
    user-select: none;
    color: var(--font-color-1);
    transition: color 0.4s;
    width: 100%;
    line-height: 100%;
    line-height: 1;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;

    .options-icon {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const StyledListContainer = styled.div`
    display: none;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;

    ${({ $listVisible }) =>
        $listVisible &&
        css`
            display: block;
        `};
`;

export const StyledInputContainer = styled.div`
    /* width: 100%; */
    position: relative;

    & > span {
        position: absolute;
        right: 1.5rem;
        top: 25%;
    }

    svg {
        transform: scale(0.8);
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    border: none;
    background-color: lightseagreen;
    border-top: 1px solid blue;
    padding: 1rem;
    padding: 1rem 1.5rem;
`;

const StyledSelectOptions = styled.ul`
    /* display: none; */
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    top: 100%;
    list-style: none;
    z-index: 100;
    max-height: 10em;
    overflow-y: auto;
    /* width: calc(100% - 3em); */
    width: 100%;
    /* padding: 0.5em 1.5em; */
    background-color: var(--background-color-2);
    background-color: lightseagreen;
    box-shadow: var(--box-shadow-flat);
    border: none;
    border-top: 1px solid blue;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    &::-webkit-scrollbar {
        width: 0.3em;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: lightgrey;
        border-radius: 100vw;
    }

    ${({ $listVisible }) =>
        $listVisible &&
        css`
            /* display: block; */
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
        `};
`;

const StyledOptionItem = styled.li`
    padding: 0.4em 0.5em;
    cursor: pointer;
    user-select: none;
    font-family: 'PoppinsLight', sans-serif;
    transition: color 0.4s;

    ${({ $isOver }) =>
        $isOver &&
        css`
            background: var(--color-3);
            color: white;
            font-family: 'PoppinsSemiBold', sans-serif;
            font-size: 1.3em;
        `}
`;

export { StyledCustomSelect, StyledValue, StyledSelectOptions, StyledOptionItem };
