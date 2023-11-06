/* eslint-disable react/prop-types */
import React from 'react';

import StyledTable from './Table.styled';

function Table({ headings, tableData }) {
    return (
        <StyledTable>
            <thead className="element-bg">
                <tr>{headings}</tr>
            </thead>
            <tbody>{tableData}</tbody>
        </StyledTable>
    );
}

export default Table;
