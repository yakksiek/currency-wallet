/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import { StyledRow, StyledTableData } from './Row.styled';

function Row({ data }) {
    const renderData = (dataObj) => {
        const { id, ...objToRender } = dataObj;
        const tdJSX = Object.values(objToRender).map((value, index) => (
            <StyledTableData key={index}>{value}</StyledTableData>
        ));
        return tdJSX;
    };
    return <StyledRow className="border-color-table">{renderData(data)}</StyledRow>;
}

const rowDataPropTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.node.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    currentRate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    currentPrice: PropTypes.string.isRequired,
    summary: PropTypes.node.isRequired,
};

Row.propTypes = {
    data: PropTypes.shape(rowDataPropTypes).isRequired,
};

export default Row;
