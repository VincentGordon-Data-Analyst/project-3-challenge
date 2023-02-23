// Prototypical use case increments loop counter by one on each iteration
for (let i = 0; i < 10; i++) {
  console.log("Iteration #", i);
}

// Looping through an array
let students = ["Johnny", "Tyler", "Bodhi", "Pappas"];

for (let j = 0; j < students.length; j++) {
  console.log(students[j]);
}


// 1. Simple conditional
if (condition) {
  // do if true
}

// 2. if-else
if (condition) {
  // do if true
} else {
  // do if false
}

// 3. else-if
if (condition1) {
  // do if condition1 is true
} else if (condition2) {
  // do if condition1 is false and condition2 is true
} else {
  // do if condition1 and condition2 are false
}

// 4. logical operators
if (condition1 && condition2) {
  // do only if condition1 and condition2 are true
}

if (condition1 || condition2) {
  // do if either condition1 or condition2 is true
}
====
    // Arrays to hold movies by decade
movies1930s = [];
movies1940s = [];
movies1950s = [];
movies1960s = [];
movies1970s = [];
movies1980s = [];
movies1990s = [];
movies2000s = [];
movies2010s = [];

// For loop to go through all movies
for (let i = 0; i < movies.length; i++) {
  // Variable to hold current movie in loop
  let movie = movies[i]
  // Increment sum variable by amount of rating
  sum += movie.profit

  // Conditional statement to determine array assignment
  if (movie.year < 1940) {
    movies1930s.push(movie);
  } else if (movie.year < 1950) {
    movies1940s.push(movie);
  } else if (movie.year < 1960) {
    movies1950s.push(movie);
  } else if (movie.year < 1970) {
    movies1960s.push(movie);
  } else if (movie.year < 1980) {
    movies1970s.push(movie);
  } else if (movie.year < 1990) {
    movies1980s.push(movie);
  } else if (movie.year < 2000) {
    movies1990s.push(movie);
  } else if (movie.year < 2010) {
    movies2000s.push(movie);
  } else {
    movies2010s.push(movie);
  }
}

// Find the average rating
let avg = sum / movies.length;

=============================
let trace1 = {
  x: [0, 1, 2, 3, 4, 5],
  y: [0, 5, 10, 15, 20, 25],
  type: "bar"
};

// Create our second trace
let trace2 = {
  x: [0, 1, 2, 3, 4, 5],
  y: [0, 1, 4, 9, 16, 25],
  type: "scatter"
};

// The data array consists of both traces
let data = [trace1, trace2];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data);
==================
// Initialized arrays
let names = []
let greekNames = []
let romanNames = []
let greekSearchResults = []
let romanSearchResults = []

// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) {
  row = searchResults[i];
  names.push(row.pair);
  greekNames.push(row.greekName);
  romanNames.push(row.romanName);
  greekSearchResults.push(row.greekSearchResults);
  romanSearchResults.push(row.romanSearchResults);
}

// Trace1 for the Greek Data
let trace1 = {
  x: names,
  y: greekSearchResults,
  text: greekNames,
  name: "Greek",
  type: "bar"
};

// Trace 2 for the Roman Data
let trace2 = {
  x: names,
  y: romanSearchResults,
  text: romanNames,
  name: "Roman",
  type: "bar"
};

// Create data array
let data = [trace1, trace2];

// Apply a title to the layout
let layout = {
  title: "Greek vs Roman gods search results",
  barmode: "group",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

===================================

// Arrays to hold movies by decade
movies1930s = [];
movies1940s = [];
movies1950s = [];
movies1960s = [];
movies1970s = [];
movies1980s = [];
movies1990s = [];
movies2000s = [];
movies2010s = [];

// For loop to go through all movies
for (let i = 0; i < movies.length; i++) {
  // Variable to hold current movie in loop
  let movie = movies[i]
  // Increment sum variable by amount of rating
  sum += movie.profit

  // Conditional statement to determine array assignment
  if (movie.year < 1940) {
    movies1930s.push(movie);
  } else if (movie.year < 1950) {
    movies1940s.push(movie);
  } else if (movie.year < 1960) {
    movies1950s.push(movie);
  } else if (movie.year < 1970) {
    movies1960s.push(movie);
  } else if (movie.year < 1980) {
    movies1970s.push(movie);
  } else if (movie.year < 1990) {
    movies1980s.push(movie);
  } else if (movie.year < 2000) {
    movies1990s.push(movie);
  } else if (movie.year < 2010) {
    movies2000s.push(movie);
  } else {
    movies2010s.push(movie);
  }
}

// Find the average rating
let avg = sum / movies.length;

=============================
let trace1 = {
  x: [0, 1, 2, 3, 4, 5],
  y: [0, 5, 10, 15, 20, 25],
  type: "bar"
};

// Create our second trace
let trace2 = {
  x: [0, 1, 2, 3, 4, 5],
  y: [0, 1, 4, 9, 16, 25],
  type: "scatter"
};

// The data array consists of both traces
let data = [trace1, trace2];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data);
==================
// Initialized arrays
let names = []
let greekNames = []
let romanNames = []
let greekSearchResults = []
let romanSearchResults = []

// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) {
  row = searchResults[i];
  names.push(row.pair);
  greekNames.push(row.greekName);
  romanNames.push(row.romanName);
  greekSearchResults.push(row.greekSearchResults);
  romanSearchResults.push(row.romanSearchResults);
}

// Trace1 for the Greek Data
let trace1 = {
  x: names,
  y: greekSearchResults,
  text: greekNames,
  name: "Greek",
  type: "bar"
};

// Trace 2 for the Roman Data
let trace2 = {
  x: names,
  y: romanSearchResults,
  text: romanNames,
  name: "Roman",
  type: "bar"
};

// Create data array
let data = [trace1, trace2];

// Apply a title to the layout
let layout = {
  title: "Greek vs Roman gods search results",
  barmode: "group",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

===================================

