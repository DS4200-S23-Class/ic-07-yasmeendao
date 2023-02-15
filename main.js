//javascript file for ic-07

//frame dimensions
const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;

const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

// data
const data = [55000,48000,27000,66000,90000];

const FRAME1 = //store svg element as a variable   
d3.select("#vis1") 
                    
  .append("svg") 
    .attr("height", FRAME_HEIGHT) //set attributes of the added 
                       
    .attr("width", FRAME_WIDTH)
    .attr("class", "frame"); 


//define frame
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 


//define max
const MAX_X = d3.max(data, (d) => { return d; }); 
console.log("Max x: " +MAX_X);  

// define x-scale
 const X_SCALE = d3.scaleLinear() // linear scale because we have 
                              // linear data 
                  .domain([0, (MAX_X + 10000)]) // add some padding  
                  .range([0, VIS_WIDTH]); 

// Now, we can use X_SCALE to plot our points
FRAME1.selectAll("points")  
    .data(data)  
    .enter()       
    .append("circle")  
      .attr("cx", (d) => { return (X_SCALE(d) + MARGINS.left); }) 
      .attr("cy", MARGINS.top) 
      .attr("r", 20)
      .attr("class", "point"); 

// We can also use X_SCALE to add an axis to the vis  
FRAME1.append("g") // g is a "placeholder" svg
      .attr("transform", "translate(" + MARGINS.left + 
            "," + (VIS_HEIGHT + MARGINS.top) + ")") //moves axis 
                                                    // within margins 
      .call(d3.axisBottom(X_SCALE).ticks(5)) // function for generating axis  
        .attr("font-size", '20px'); // set font size




