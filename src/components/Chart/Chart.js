/* eslint-disable react/prop-types */
import React from 'react';
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

function ChartRates({ labels, chartData }) {
    const data = {
        labels,
        datasets: chartData,
    };

    return (
        <div style={{ width: 900, height: 400 }}>
            <Line options={options} data={data} />
        </div>
    );
}

export default ChartRates;
