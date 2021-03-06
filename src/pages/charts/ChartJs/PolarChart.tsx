import React from 'react';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChart = () => {
    // chart data
    const polarChartData: ChartData<'polarArea'> = {
        datasets: [
            {
                data: [11, 16, 7, 3, 14],
                backgroundColor: ['#727cf5', '#fa5c7c', '#0acf97', '#ebeff2', '#39afd1'],
                hoverBackgroundColor: ['#727cf5', '#fa5c7c', '#0acf97', '#ebeff2', '#39afd1'],
                label: 'My dataset', // for legend
            },
        ],
        labels: ['Purple', 'Red', 'Green', 'Grey', 'Cyan'],
    };

    // default options
    const polarChartOpts: ChartOptions<'polarArea'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Polar Chart</h4>

                <div className="mb-5 mt-4 chartjs-chart" style={{ height: '320px', maxWidth: '100%' }}>
                    <PolarArea data={polarChartData} options={polarChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default PolarChart;
