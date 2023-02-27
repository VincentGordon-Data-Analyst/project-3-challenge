// Create paths to stored data
casetablePath = "./data/casetable.json";
statecoordsPath = "./data/Statecoords.json";
countryPath = "./data/countrytable.json";
modelPath = "./data/modeltable.json";

function init(){
    let dropdownMenu = d3.select("#selDataset");
    d3.json(casetablePath).then(function() {

        // Add countries to dropdown menu
        for (let i = 0; i < countryIds.length; i++){
            let countryId = countryIds[i];
            
            // Append country id to drop down menu
            dropdownMenu.append("option").property("value", countryId).text(countryId);
        }
        
        // Get first country id
        let firstCountry = countryIds[0];

        // Initialize graph on first country code
        buildBarChart(firstCountry);
        optionChanged(firstCountry);
    });
    
}

// Fetch the JSON data 
d3.json(countryPath).then(function(data){
    
    // Initialize empty arrays 
    countryNames = [];
    countryIds = []

    for (let i = 0; i < data.length; i++) {
        row = data[i];

        // Add each value to respective arrays
        countryNames.push(row.country_name);
        countryIds.push(row.country_id);
    }
});

function buildBarChart(countryCode) {
    
    d3.json(casetablePath).then(function(data) {
        // Find distince model_ids
        let uniqueModels =  [...new Set(data.map(item => item.model_id))];

        let eachModel = [];
        let eachCount = []
        
        // Loop through unique models
        for (let i = 0; i < uniqueModels.length; i++) {
            uniqueModel = uniqueModels[i];
            
            let total = 0;
            // Loop through json file
            for (let j = 0; j < data.length; j++) {
                row = data[j];
                
                // Match selected county code to database country code
                if (row.country_id == countryCode && row.model_id != null && row.model_id == uniqueModel) {
                    total += row.deathtotal;

                    // Push to empty arrays
                    eachModel.push(uniqueModel)
                    eachCount.push(total)
                }
                
            }

        }
        
        // Build bar chart for each model
        let trace = {
            x: eachModel,
            y: eachCount,
            type: "bar"
        }
        
        let layout = {
            title: "Total Deaths by Tesla Model"
        }
        let barTrace = [trace];
        
        Plotly.newPlot("bar", barTrace, layout);
    });
}
     
    // Initialize onChange function
    function optionChanged(newData) {
        buildBarChart(newData);
    }
init();