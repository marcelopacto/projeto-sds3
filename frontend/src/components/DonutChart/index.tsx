import Chart from 'react-apexcharts';

const DonutChart = () => {
    
    const mockData = {
        series: [137132.39, 41797.34, 99440.83, 25393.83],
        labels: ['Easy Alpha', 'Easy Primavera', 'Easy Lucas', 'EasyN.Mutum']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
      <Chart 
       options = {{...options, labels: mockData.labels}}
       series={mockData.series}
       type = "donut"
       height = "240"
      />
    );
  }
  
  export default DonutChart
  