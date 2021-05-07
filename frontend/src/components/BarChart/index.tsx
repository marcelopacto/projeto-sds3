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
                name: "Vendas em mil R$",
                data: [137.132, 41.797, 99.441, 25.394]                   
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
  