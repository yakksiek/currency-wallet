import styled, { css } from 'styled-components';

const StyledCustomSelect = styled.div`
    display: flex;
    align-items: center;
    outline: none;
    cursor: pointer;
    position: relative;
    min-width: 250px;
    min-height: 50px;
    border-radius: 1rem;
    width: 100%;

    &:hover {
    }

    ${({ $listVisible }) =>
        $listVisible &&
        css`
            && {
                display: block;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
            }
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
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
                }
            }
        `}
`;

const StyledValue = styled.span`
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
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        `};
`;

export const StyledInputContainer = styled.div`
    position: relative;

    & > span {
        position: absolute;
        right: 2rem;
        top: 25%;
    }

    svg {
        transform: scale(0.8);
        color: var(--accent-color-3);
    }

    .search-icon {
        pointer-events: none;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    border: none;
    border-top: 1px solid var(--accent-color-3);
    border-bottom: 1px solid var(--accent-color-3);
    padding: 1rem 2rem;
`;

const StyledSelectOptions = styled.ul`
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    top: 100%;
    list-style: none;
    z-index: 100;
    max-height: 10rem;
    overflow-y: auto;
    width: 100%;
    box-shadow: var(--box-shadow-flat);
    border: none;
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
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
        `};
`;

const StyledOptionItem = styled.li`
    padding: 0.4em 2em;
    cursor: pointer;
    user-select: none;
    font-family: 'PoppinsLight', sans-serif;
    transition: color 0.4s;

    ${({ $isOver }) =>
        $isOver &&
        css`
            background: lightgray;
            font-family: 'PoppinsSemiBold', sans-serif;
            font-size: 1.3em;
            color: #000;
        `}
`;

export { StyledCustomSelect, StyledValue, StyledSelectOptions, StyledOptionItem };
