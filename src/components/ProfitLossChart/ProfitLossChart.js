import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

import * as h from '../helpers';
import * as db from '../../data';
import Chart from '../Chart';

function ProfitLossChart() {
    const theme = useTheme();
    const { darkMode } = useSelector((store) => store.darkMode);
    const { transactions } = useSelector((store) => store.transactions);
    const { data } = useSelector((store) => store.currency.latest);
    const darkTheme = darkMode ? 'dark' : 'light';
    const gridLinesColor = theme.palete[darkTheme]['border-color'];

    const labels = h.extractAndSortDates(transactions);

    function calculateProfitLossPerLabel(transactionsArr, currentRatesObj, datesLabels) {
        const chartProfitData = {};

        datesLabels.forEach((label, index) => {
            transactionsArr.forEach((transactionObj) => {
                const { date, currency } = transactionObj;
                const [_, symbol] = currency.split(' ');
                const monthYear = h.formatDateToMonthYear(date);
                if (label !== monthYear) return;

                const { profitLoss } = h.calculateProfitLoss(transactionObj, currentRatesObj);

                if (!chartProfitData[symbol]) {
                    chartProfitData[symbol] = Array.from({ length: datesLabels.length }, () => 0);
                }

                chartProfitData[symbol][index] += profitLoss;
            });
        });

        for (const currency in chartProfitData) {
            if (currency in chartProfitData) {
                const values = chartProfitData[currency];
                // eslint-disable-next-line no-plusplus
                for (let i = 0; i < values.length; i++) {
                    values[i] = parseFloat(values[i].toFixed(2));
                }
            }
        }

        return chartProfitData;
    }

    const renderDataObjForChart = function (profitLossPerLabel, chartColors) {
        const chartObjData = [];
        for (const [index, [currencySymbol, profitArr]] of Object.entries(profitLossPerLabel).entries()) {
            const chartItem = {
                label: currencySymbol,
                data: profitArr,
                backgroundColor: chartColors[index],
                borderColor: chartColors[index],
            };

            chartObjData.push(chartItem);
        }

        return chartObjData;
    };

    return (
        <div className="element">
            <h2>Chart rates data</h2>
            {!data ? (
                <h4>Add first transaction to show chart</h4>
            ) : (
                <div className="scroll">
                    <Chart
                        labels={labels}
                        chartData={renderDataObjForChart(
                            calculateProfitLossPerLabel(transactions, data.rates, labels),
                            db.chartColors,
                        )}
                        gridColor={gridLinesColor}
                    />
                </div>
            )}
        </div>
    );
}

export default ProfitLossChart;
