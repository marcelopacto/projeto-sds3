import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {


    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] })

    //  FORMA ERRADA  PORQUE CONSUME A API DE DADOS VÁRIAS VEZES ENQUANTO RENDERIZA O GRAFICO
    // let chartData : ChartData = {labels: [], series: []};


    useEffect(() => {

        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySeries });


            });

    }, [])



    // FIM DA FORMA ERRADA

    //const mockData = {
    //    series: [137132.39, 41797.34, 99440.83, 25393.83],
    //    labels: ['Easy Alpha', 'Easy Primavera', 'Easy Lucas', 'EasyN.Mutum']
    //}

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart
