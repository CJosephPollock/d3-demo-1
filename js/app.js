'use strict';

//Create a data
 var data = [1,2,3,4,5]

//Using d3.js to create some graphics
//Select circle to bind data
var circleChart = d3.select('#chart').attr('height', 300)



//Change the radius of each circle, so r increments by 5 at a time
var circles = circleChart.selectAll('circle').data(data).enter()
	.append('circle')       //Append an element
    //Assign attribute
    .attr('r', 15)          
    .attr('cx', function(d) {return d * 30})         
    .attr('cy', function(d) {return d * 30})         
    .attr('fill', 'red');

//Create another data
var lessData = [1,2,3]
//Select circle and bind new data to it

var circles = circleChart.selectAll('circle').data(lessData).attr('fill', 'purple')
//Circles with new data in dark green color


//Remove the red circles which is not related to the new data
circles.exit().transition().attr("r",'0').duration(1000).remove();



// A more complex data file
// var dataset = [
// 	{name: 'Mary', age: 40},
// 	{name: 'John', age: 10},
// 	{name: 'Peter', age: 30},
//  {name: 'Katrina', age: 20}
// ];

//Create a div in your html and then append paragraphs
//To show the names in the dataset
//Use .text() to print on the html and function(d) to get data


