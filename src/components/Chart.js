import React from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2'

class Chart extends React.Component{
	state={
		chartData:this.props.chartData
	}
	// state={
	// 	chartData:{
	// 		labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
	// 		datasets:[{
	// 			label:'Population',
	// 			data:[
 //              617594,
 //              181045,
 //              153060,
 //              106519,
 //              105162,
 //              95072
 //            ],
 //             backgroundColor:[
 //              'rgba(255, 99, 132, 0.6)',
 //              'rgba(54, 162, 235, 0.6)',
 //              'rgba(255, 206, 86, 0.6)',
 //              'rgba(75, 192, 192, 0.6)',
 //              'rgba(153, 102, 255, 0.6)',
 //              'rgba(255, 159, 64, 0.6)',
 //              'rgba(255, 99, 132, 0.6)'
 //            ]
	// 		}]
	// 	}
	// }
	static defaultProps={
		displayTitle:true,
		displayLegend:true,
		displayPosition:'right',
		location:"City"
	}
	render(){
		return(
			<div className='chart'>
				<Bar 
					data={this.state.chartData}
					height={100}
					options={{
						maintainAspectRatio:true,
						title:{
							display:this.props.displayTitle,
							text:`Largest cities in ${this.props.location}`,
							fontSize:25
						},
						legend:{
							display:this.props.displayLegend,
							position:this.props.displayPosition
						}
					}}
				/>
				<Line 
					data={this.state.chartData}
					height={100}
					options={{
						maintainAspectRatio:true,
						title:{
							display:this.props.displayTitle,
							text:`Largest cities in ${this.props.location}`,
							fontSize:25
						},
						legend:{
							display:this.props.displayLegend,
							position:this.props.displayPosition
						}
					}}
				/>
				<Pie 
					data={this.state.chartData}
					height={100}
					options={{
						maintainAspectRatio:true,
						title:{
							display:this.props.displayTitle,
							text:`Largest cities in ${this.props.location}`,
							fontSize:25
						},
						legend:{
							display:this.props.displayLegend,
							position:this.props.displayPosition
						}
					}}
				/>
			</div>
		)
	}
}

export default Chart