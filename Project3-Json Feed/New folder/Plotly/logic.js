let casenumber=[]
let state=[]
let death=[]
let year=[]
let country=[]
for(let i=0;i<data.length; i++){
  let row = data['case'][i];
  casenumber.push(row['case#']);
  state.push(row.state);
  death.push(row.Death);
  year.push(row.year);
  country.push(row.country);
}
console.log(data['case'][0].state);
console.log(year);
console.log(state);
let trace={
  x:state,
  y:death,
  text:state,
  name:"accident death",
  type:"bar"
};
let graph=[trace];
let layout={
  title:"Tesla Death by state",
  margin:{
    l:50,
    r:50,
    b:200,
    t:50,
    pad:4

  }
};
Plotly.newPlot("plot", graph);