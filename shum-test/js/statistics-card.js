'use strict';

window.addEventListener('DOMContentLoaded', () => {
	let data = [{
		data: [100, 21, 25],
		labels: ["Украина", "Россия", "US"],
		backgroundColor: [
			"#4b77a9",
			"#5f255f",
			"#d21243",
			"#B27200"
		],
		borderColor: "#fff"
	}];
	
	let options = {
	   	tooltips: {
	 		enabled: false
		},
		plugins: {
			datalabels: {
				formatter: (value, ctx) => {
					let sum = 0;
					let dataArr = ctx.chart.data.datasets[0].data;
					dataArr.map(data => {
						sum += data;
					});
					let percentage = (value*100 / sum).toFixed(2)+"%";
					return percentage;
				}, color: '#fff',
			}
		}
	};


	let ctx = document.getElementById("analytics-location").getContext('2d');
	let myChart = new Chart(ctx, {
		type: 'pie',
		data: {datasets: data},
		options: options
	});
	
	
    // let oilCanvas = document.getElementById("analytics-location");

	// let oilData = {
	// 	labels: ["Украина", "Россия",],
	// 	datasets: [{
	// 		data: [50, 80],
	// 		backgroundColor: [
	// 			"#FF6384",
	// 			"#63FF84",
	// 		],
	// 		borderColor: "black",
	// 		borderWidth: 1
	// 	}]
	// };

	// let chartOptions = {
	// 	tooltips: {
	// 		enabled: false
	// 	},
	// 	plugins: {
	// 		datalabels: {
	// 			formatter: (value, ctx) => {
	// 				let sum = 0;
	// 				let dataArr = ctx.chart.data.datasets[0].data;
	// 				dataArr.map(data => {
	// 					sum += data;
	// 				});
	// 				let percentage = (value*100 / sum).toFixed(2)+"%";
	// 				return percentage;
	// 			},
	// 			color: '#fff',
	// 		}
	// 	},
	// 	// rotation: -Math.PI,
	// 	// cutoutPercentage: 30,
	// 	// circumference: Math.PI,
	// 	// animation: {
	// 	// 	animateRotate: false,
	// 	// 	animateScale: true
	// 	// }
	// };

	// let pieChart = new Chart(oilCanvas, {
	// 	type: 'doughnut',
	// 	data: oilData,
	// 	options: chartOptions
	// });
});