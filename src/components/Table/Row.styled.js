import styled from 'styled-components';

export const StyledRow = styled.tr`
    &:hover {
        && button {
            visibility: visible;
        }
    }

    && button {
        transform: scale(0.8);
        visibility: hidden;
        margin-right: 1rem;

        svg {
            transform: scale(0.8);
        }
    }
`;

export const StyledTableData = styled.td`
    padding: 1rem 0;

    .date {
        color: var(--accent-color-3);
    }

    .summary.loss {
        color: var(--accent-color-2);
    }

    .summary.profit {
        color: var(--accent-color-1);
    }

    .summary {
        display: flex;
    }
`;
