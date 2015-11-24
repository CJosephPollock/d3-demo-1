'use strict';

//Create a data
 var data = [1,2,3,4,5]

//Using d3.js to create some graphics
//Select circle to bind data
d3.select('#chart')
	.append('circle')       //Append an element
    //Assign attribute
    .attr('r', 15)          
    .attr('cx', 50)         
    .attr('cy', 50)         
    .attr('fill', 'red')    


//Change the radius of each circle, so r increments by 5 at a time

//Create another data
//var data = [1,2,3]
//Select circle and bind new data to it
//Circles with new data in dark green color


//Remove the red circles which is not related to the new data



//A more complex data file
// var dataset = [
// 	{name: 'Mary', age: 40},
// 	{name: 'John', age: 10},
// 	{name: 'Peter', age: 30},
//  {name: 'Katrina', age: 20}
// ];

//Create a div in your html and then append paragraphs
//To show the names in the dataset


