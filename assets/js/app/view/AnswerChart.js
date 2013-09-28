Ext.define('Qz.view.AnswerChart',{
	xtype: 'answerchart',
	extend: 'Ext.chart.Chart',
config: {
		flipXY: true,
		background: 'white',
		 interactions: ['panzoom'],
            store: {
	        fields: ['cat', 'right', 'wrong'],
	        data: [
	                {cat: 'mysql', right: 23, wrong: 10},
	                {cat: 'jquery', right: 3, wrong: 23},
	                {cat: 'javascript', right: 5, wrong: 9}
	              ]
	    },
/*
            legend: {
                position: 'right',
		width: 80
            },
*/
            axes: [{
                type: 'numeric',
                position: 'bottom',
		minimum: 0,
                grid: true
            }, {
                type: 'category',
                position: 'left'
            }],
            series: [{
                type: 'bar',
                gutter: 80,
                xField: 'cat',
                yField: ['right', 'wrong'],
                stacked: true,
	        style: {
	        	stroke: 'rgb(40,40,40)',
	                maxBarWidth: 30
	        },
	        subStyle: {
	                fill: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
	        }
            }]
	}
});
