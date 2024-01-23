import styled from 'styled-components';

export const StyledTableContainer = styled.div`
    overflow-y: auto;
    max-height: 400px;
    padding-right: 1rem;
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

        svg,
        div {
            transform: scale(0.8);
        }
    }
`;

export const StyledErrorHeading = styled.h4`
    && {
        color: green;
        margin-top: 1rem;
    }
`;
