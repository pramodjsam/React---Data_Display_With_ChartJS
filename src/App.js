// import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'
import React from 'react'

class App extends React.Component{
  state={
    chartData:{}
  }

  componentWillMount(){
    this.getChartData()
  }

  getChartData(){
    //AJAX call if any
    this.setState({
      chartData:{
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets:[{
        label:'Population',
        data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
             backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
      }]
    }
    })
  }
  render(){
    return(
      <div className='App'>
        <Chart chartData={this.state.chartData} displayPosition="bottom" location="Massechusetts" />
      </div>
    )
  }
}


export default App;
