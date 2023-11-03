import styled from 'styled-components';

const StyledTableContainer = styled.div`
    max-height: 400px;
    overflow-y: auto;
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

export default StyledTableContainer;
