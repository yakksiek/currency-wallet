import styled from 'styled-components';

export const StyledTableContainer = styled.div`
    overflow-y: auto;
    max-height: 400px;
    padding-right: 1rem;

    &::-webkit-scrollbar {
        width: 0.2em;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        margin-block-start: 2.5rem;
        margin-block-end: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-3);
        border-radius: 100vw;
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    justify-content: space-between;

    && h2 {
        margin-bottom: 0;
    }

    .info-container {
        border: 1px solid grey;
        padding: 0.7rem;
        border-radius: 100vh;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    button {
        font-size: 0.7rem;

        & svg,
        & div {
            transform: scale(0.8);
        }
    }
`;
