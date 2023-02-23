--drop tables if exist if decide to run entire code
--uncomment when needed
--DROP TABLE IF EXISTS countryTable CASCADE;
--DROP TABLE IF EXISTS stateTable CASCADE;
--DROP TABLE IF EXISTS keywordTable CASCADE;
--DROP TABLE IF EXISTS modelTable CASCADE;
--DROP TABLE IF EXISTS casesTable CASCADE;


--create tables
CREATE TABLE countryTable (
    country_id varchar(6) PRIMARY KEY,
    country_name varchar(24) NOT NULL
);

CREATE TABLE stateTable (
    state_id varchar(6) PRIMARY KEY,
    state_name varchar(24) NOT NULL
);

CREATE TABLE modelTable (
    model_id varchar(6) PRIMARY KEY,
    model varchar(3) NOT NULL
);

CREATE TABLE casesTable (
    cases_no varchar(6) PRIMARY KEY,
    caseDate date NOT NULL,
    country_id varchar(6),
    state_id varchar(6),
    caseDescription varchar NOT NULL,
	deathTotal int,
	driverDeath int,
	occupantDeath int,
	otherVehicle int,
    cylist_pedestrian int,
    TSLA_cyclist_pedestrian int,	
    model_id varchar(6),
    autopilotClaimed int,
    verifiedTeslaAutoDeaths int,
	verfied_and_reported_deaths int,
	FOREIGN KEY (country_id) REFERENCES countryTable(country_id),
    FOREIGN KEY (state_id) REFERENCES stateTable(state_id),
    FOREIGN KEY (model_id) REFERENCES modelTable(model_id)
);

--datestyle set to match CSV files
SET datestyle TO postgres, mdy;
SHOW datestyle;

COPY countryTable(country_id, country_name)
	FROM 'C:\project3\data\countries.csv'
	DELIMITER ','
	CSV HEADER;
	
COPY stateTable(state_id, state_name)
	FROM 'C:\project3\data\states.csv'
	DELIMITER ','
	CSV HEADER;
	
COPY modelTable(model_id, model)
	FROM 'C:\project3\data\models.csv'
	DELIMITER ','
	CSV HEADER;
	
COPY casesTable(cases_no, caseDate, country_id, state_id, caseDescription, deathTotal, driverDeath, occupantDeath, otherVehicle, cylist_pedestrian, TSLA_cyclist_pedestrian, model_id, autopilotClaimed, verifiedTeslaAutoDeaths, verfied_and_reported_deaths)
	FROM 'C:\project3\data\cases.csv'
	DELIMITER ','
	CSV HEADER;
	
SELECT * FROM casesTable;