const DataTable = () => {
    return (
        <div className="table-responsive">
    <table className="table table-striped table-sm">
        <thead>
            <tr>
                <th>Loja</th>
                <th>Qtde Vendas</th>
                <th>Venda Bruta</th>
                <th>Descontos</th>
                <th>Venda Líquida</th>
                <th>Ticket Médio</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Easy Alpha</td>
                <td>129</td>
                <td>144.032,54</td>
                <td>  6.900,15</td>
                <td>137.132,39</td>
                <td>  1.063,04</td>
                <td>Easy Alpha</td>
            </tr>
            <tr>
                <td>Easy Primavera</td>
                <td> 40</td>
                <td>43.027,34</td>
                <td> 1.230,00</td>
                <td>41.797,34</td>
                <td> 1.044,93</td>
                <td>Easy Primavera</td>
            </tr>
            <tr>
                <td>Easy Lucas</td>
                <td> 66</td>
                <td>333.424,80</td>
                <td>233.983,97</td>
                <td> 99.440,83</td>
                <td>  1.506,68</td>
                <td>Easy Lucas</td>
            </tr>
            <tr>
                <td>Easy N.Mutum</td>
                <td> 14</td>
                <td>66.420,00</td>
                <td>41.026,17</td>
                <td>25.393,83</td>
                <td> 1.813,85</td>
                <td>Easy N.Mutum</td>
            </tr>
            <tr>
                <td><h5>TOTAL</h5></td>
                <td><h5>249</h5></td>
                <td><h5>586.904,68</h5></td>
                <td><h5>283.140,29</h5></td>
                <td><h5>183.764,39</h5></td>
                <td><h5>  1.357,13</h5></td>
                <td><h5>TOTAL</h5></td>
            </tr>
        </tbody>
    </table>
</div>
    );
  }
  
  export default DataTable
  