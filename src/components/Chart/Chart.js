import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    plugins: {
        legend: {
            position: 'right',
        },
    },
};

function ChartRates({ labels, chartData, classes }) {
    const data = {
        labels,
        datasets: chartData,
    };

    return (
        <div className={classes} style={{ width: 900, height: 400, margin: '0 auto' }}>
            <Line options={options} data={data} />
        </div>
    );
}

ChartRates.defaultProps = {
    classes: '',
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
    classes: PropTypes.string,
};

export default ChartRates;
