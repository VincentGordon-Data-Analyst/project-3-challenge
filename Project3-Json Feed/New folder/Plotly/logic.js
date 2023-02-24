let casenumber=[]
let state=[]
let death=[]
let year=[]
let country=[]

let case_data = tesla_data
//
// for (let i=0; i < case_data['case'].length; i++) {
//   console.log(case_data['case'][i]);
// };

for(let i=0; i< case_data['case'].length; i++){
  let row = case_data['case'][i];
  // console.log(row);
  casenumber.push(row['case#']);
  state.push(row.state);
  death.push(row.Death);
  year.push(row.year);
  country.push(row.country);
};

console.log(year);
console.log(state);
let trace={
  x:state,
  y:death,
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