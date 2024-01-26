import React from 'react';
import PropTypes from 'prop-types';
import { Line, Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

function ChartRates({ labels, chartData, gridLinesColor }) {
    const data = {
        labels,
        datasets: chartData,
    };

    const options = {
        plugins: {
            legend: {
                position: 'right',
            },
        },
        scales: {
            y: {
                grid: {
                    color: gridLinesColor,
                    borderWidth: 0.02,
                },
            },
        },
    };

    return (
        <div style={{ width: 900, height: 400, margin: '0 auto' }}>
            {/* <Line options={options} data={data} /> */}
            <Bar options={options} data={data} />
        </div>
    );
}

ChartRates.defaultProps = {
    gridLinesColor: 'darkgrey',
};

ChartRates.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    chartData: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            data: PropTypes.arrayOf(PropTypes.number).isRequired,
            backgroundColor: PropTypes.string.isRequired,
            borderColor: PropTypes.string.isRequired,
        }),
    ).isRequired,
    gridLinesColor: PropTypes.string,
};

export default ChartRates;
