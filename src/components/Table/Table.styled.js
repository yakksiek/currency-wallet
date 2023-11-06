import styled from 'styled-components';

const StyledTable = styled.table`
    width: 100%;
    text-align: left;
    font-size: 0.8rem;
    border-collapse: collapse;
    overflow-x: auto;
    min-width: 850px;

    thead {
        color: var(--color-3);
        position: sticky;
        top: 0;
        z-index: 1;

        th {
            padding-bottom: 0.5rem;
        }
    }
`;

export default StyledTable;
