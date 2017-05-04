function drawScatterPlot(plotData, identifier) {
	var margin = {
		top : 20,
		right : 20,
		bottom : 30,
		left : 50
	}, width = 960 - margin.left - margin.right, height = 500 - margin.top
			- margin.bottom;

	var x = d3.scaleLinear().range([ 0, width ]);
	var y = d3.scaleLinear().range([ height, 0 ]);

	var valueline = d3.line().x(function(d) {
		return x(d.index);
	}).y(function(d) {
		return y(d.data);
	});

	var svg = d3.select(identifier).append("svg").attr("width",
			width + margin.left + margin.right).attr("height",
			height + margin.top + margin.bottom).append("g").attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");

	x.domain(d3.extent(plotData, function(d) {
		return d.index;
	}));
	y.domain([ 0, d3.max(plotData, function(d) {
		return d.data;
	}) ]);

	svg.selectAll("circle").data(plotData).enter().append("circle")
			.attr("r", 3).attr("cx", function(d) {
				return x(d.index);
			}).attr("cy", function(d) {
				return y(d.data);
			}).attr("fill", "blue");

	svg.append("g").attr("transform", "translate(0," + height + ")").call(
			d3.axisBottom(x));

	svg.append("g").call(d3.axisLeft(y));

}

function findMean(dataArray) {
	var sum = 0
	for (var i = 0; i < dataArray.length; i++) {
		sum += dataArray[i].data;
	}
	return (sum / dataArray.length);
}

function findMedian(dataArray) {
	dataArray.sort(function(a, b) {
		return a.data - b.data;
	});
	return dataArray[Math.floor(dataArray.length / 2)].data;

}
