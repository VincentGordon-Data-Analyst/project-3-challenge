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
    
            dropdownMenu.append("option").property("value", countryId).text(countryId);
        }
        
        let firstCountry = countryIds[0];

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
        let uniqueModels =  [...new Set(data.map(item => item.model_id))];

        let eachModel = [];
        let eachCount = []
        for (let i = 0; i < uniqueModels.length; i++) {
            uniqueModel = uniqueModels[i];
            
            let total = 0;
            for (let j = 0; j < data.length; j++) {
                row = data[j];
                
                // Match selected county code to database country code
                if (row.country_id == countryCode && row.model_id != null && row.model_id == uniqueModel) {
                    total += row.deathtotal;

                    eachModel.push(uniqueModel)
                    eachCount.push(total)
                }
                
            }

        }
            

        
    });
}
     

        
        // let teslaModels = []
        // for (let i = 0; i < modelIds.length; i++) {
        //     modelId = modelIds[i];
        //     if (modelId != null) {
        //         teslaModels.push(modelId)
        //     }
        // } 
    
        // Plots bar graph based on model deathtotal
        // let restults = data.filter(item => item.country_id == "c001")
        // console.log(restults[0].model_id)
        // console.log(restults[0].deathtotal)
    
        // let trace1 = {
        //     x: [restults[0].model_id],
        //     y: [restults[0].deathtotal],
        //     type: "bar"
        // }
    
        // let traceBar = [trace1]
    
        // Plotly.newPlot("bar", traceBar);

    
    // // Fetch the JSON data and console.log it
    // d3.json(casetablePath).then(function(data) {
    //     console.log(data);
        
    //     // Get unqiue state ids
    //     let stateIds =  [...new Set(data.map(item => item.state_id))];

    //     let stateDeachCount = [];

    //     for (let i = 0; i < stateIds.length; i++) {
    //         eachId = stateIds[i];

    //         let totalDeathCount = 0;
    //         for (let j = 0; j < data.length; j++) {
    //             row = data[j];

    //             if (row.state_id == eachId) {
    //                 totalDeathCount += row['deathtotal'];
    //             }
    //         }
    //         stateDeachCount.push(totalDeathCount);
    //     }
         
    //     var barTrace = [
    //         {
    //             x: stateIds,
    //             y: stateDeachCount,
    //             type: "bar",
    //         }
    //     ];
        
        
    //     Plotly.newPlot('bar', barTrace)
    // });
    function optionChanged(newData) {
        buildBarChart(newData);
    }
init();