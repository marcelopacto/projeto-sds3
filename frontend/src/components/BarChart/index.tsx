import Chart from 'react-apexcharts';

const BarChart = () => {
    
      const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Easy Alpha', 'Easy Primavera', 'Easy Lucas', 'EasyN.Mutum']
        },
        series: [
            {
                name: "Vendas em R$",
                data: [137132.39, 41797.34, 99440.83, 25393.83]                   
            }
        ]
    };
    return (
      <Chart 
       options = {{...options, xaxis: mockData.labels}}
       series={mockData.series}
       type = "bar"
       height = "240"
      />
    );
  }
  
  export default BarChart
  