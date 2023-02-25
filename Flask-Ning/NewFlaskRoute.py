###read the file ###
import json
import csv
import datetime as dt
import numpy as np
import psycopg2
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
from flask import Flask, jsonify
#####################SQL SESSION###################
#Link to postgreSQL
engine = create_engine("postgresql+psycopg2://postgres:dbcode@localhost:5432/Project3")
#reflect an existing databse into a new model
Base = automap_base()
#refect the tables
Base.prepare(autoload_with=engine)
#check the contents
print(Base.classes.keys())
#save object for SQLalchemy
Countrytable=Base.classes.countrytable
Casetable=Base.classes.casestable
Modeltable=Base.classes.modeltable
Stateable=Base.classes.statetable

###########################to show kaggle original data###################
import csv

with open('Tesla Deaths - Deaths.csv', 'r') as f:
    reader = csv.reader(f)
    next(reader)
    data = {'case': []}
    for row in reader:
        data['case'].append(
            {'case#': row[0], 'year': row[1], 'Date': row[2], 'country': row[3], 'state': row[4], 'Description': row[5],
             'Death': row[6], 'Tesla driver': row[7], 'other Vehicle': row[9], 'Model': row[12],
             'Autopilot Claimed': row[13], 'Verified Tesla Autopilot Deaths': row[14]})
        # print(data)
        # print(row)
    print(len(data['case']))  ## need to drop the las 7 json row
with open('Tesla.json', 'w') as f:
    json.dump(data, f, indent=4)
################################ API code#######

#################################################
# Flask Routes
#################################################
# #################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes for appendix."""
    return (
        f"<h1>Available Routes:</h1><br/>"
        "######################################<br/>"
        f"<h2>/dataoverview</h2><br/>"
        "-----------------------------------------<br/>"
        f"<h2>/preparecountrytable</h2><br/>"
        f"NOTE:By routing it will prepareJson file &return PostgresDB data for this table <br/>"
        "-----------------------------------------<br/>"
        f"<h2>/preparecasestable</h2><br/>"
        f"NOTE:By routing it will prepareJson file &return PostgresDB data for this table <br/>"
        "-----------------------------------------<br/>"
        f"<h2>/preparemodeltable</h2><br/>"
        f"NOTE:By routing it will prepareJson file &return PostgresDB data for this table <br/>"
        "-----------------------------------------<br/>"
        f"<h2>/preparestatetable</h2><br/>"
        f"NOTE:By routing it will prepareJson file &return PostgresDB data for this table <br/>"
        "-----------------------------------------<br/>"
        f"<h2>/inspectreasonbydeath/<deathNo></h2><br/>"
        f"NOTE:By routing it will prepareJson file &return PostgresDB data for this table; eg.daathNo=1; it will show all case number and death description <br/>"
        "-----------------------------------------<br/>"
        f"<h2>/state/<state></h2><br/>"
        f"NOTE:case extention eg. /state/CA format<br/>"
        "-----------------------------------------<br/>"
        f"<h2>/country/<country></h2><br/>"
        f"NOTE:case extention eg. /country/USA format<br/>"
        f"----------------------------------------<br/>"

        f"<h2>/death/death</h2></br>"
        f"NOTE:case extention eg. /death/2 format<br/>")


@app.route("/dataoverview")
def dataoverview():
    return data['case']
    # since flask is python base use fetch to do the work in html


# ['countrytable', 'casestable', 'modeltable', 'statetable']
####fetch country table from SQL##########
@app.route("/preparecountrytable")
def seleccountrytable():
    #link to DB
    session = Session(engine)
    countrydata = session.query(Countrytable)
    session.close()
    holder=[]
    for row in countrydata:
        holder.append({"country_id": row.country_id, "country_name": row.country_name})
        print(holder)
    session.close()
    with open('countrytableAPI.json','w') as f:
        json.dump(holder, f, indent=4)
    return jsonify(holder)
####fetch case table from SQL##########
@app.route("/preparecasestable")
def seleccasestable():
    #link to DB
    session = Session(engine)
    casedata = session.query(Casetable)
    session.close()
    holder=[]
    for row in casedata:
        holder.append({"cases_no": row.cases_no,"casedate": str(row.casedate),"country_id":row.country_id, "state_id":row.state_id,"casedescription":row.casedescription, "deathtotal":row.deathtotal,"driverdeath":row.driverdeath,"occupantdeath":row.occupantdeath,"othervehicle":row.othervehicle,"cylist_pedestrian":row.cylist_pedestrian,"model_id":row.model_id,"autopilotclaimed":row.autopilotclaimed,"verifiedteslaautodeaths":row.verifiedteslaautodeaths,"verified_and_reported_deaths":row.verfied_and_reported_deaths})
#     # *7 to normalize rember to down back
            # *7 to normalize rember to down back
        print(holder)
    with open('CasestableAPI.json','w') as f:
        json.dump(holder, f, indent=4)
    return jsonify(holder)
####fetch model table from SQL##########
@app.route("/preparemodeltable")
def selectmodeltable():
    #link to DB
    session = Session(engine)
    modeldata = session.query(Modeltable)
    session.close()
    holder=[]
    for row in modeldata:
        holder.append({"model_id": row.model_id, "model": row.model})
#     # *7 to normalize rember to down back
            # *7 to normalize rember to down back
        print(holder)
    with open('ModeltableAPI.json','w') as f:
        json.dump(holder, f, indent=4)
    return jsonify(holder)
####fetch state table from SQL##########
@app.route("/preparestatetable")
def selectstatetable():
    #link to DB
    session = Session(engine)
    statesdata =session.query(Stateable)
    session.close()
    holder=[]
    for row in statesdata:
        print(f"{row.state_id},{row.state_name},{row.latitude},{row.longitude}")
    #     raise TypeError(f'Object of type {o.__class__.__name__} '
      # TypeError: Object of type Decimal is not JSON serializable
        holder.append({"state_id": row.state_id, "state_name": row.state_name, "latitude": int((row.latitude)*10000000), "longitude": int((row.longitude)*10000000)})
     # *7 to normalize rember to down back
    with open('Statecoords.json','w') as f:
        json.dump(holder, f, indent=4)
        return jsonify(holder)
### fetch a select case info from case table###
@app.route("/inspectreasonbydeath/<deathNo>")
def fetchcasedetail(deathNo):
    session = Session(engine)
    arraydeath=0
    arraydeath=session.query(Casetable.cases_no,Casetable.casedescription).filter(Casetable.deathtotal==int(deathNo))
    session.close()
    finalist=[{x:y} for x,y in arraydeath]
    return jsonify(finalist)

# usa = session.query(BaseballPlayer). \
#     filter(BaseballPlayer.birth_country == 'USA').count()
# print(f"There are {usa} players from the USA")

########## inspect original kaggel data#######
@app.route("/state/<state>")
def stateselector(state):
    dataholder = []
    for casse in data['case']:
        if casse['state'] == state:
            dataholder.append(casse)
    return jsonify(dataholder)


@app.route("/death/<death>")
def daethselector(death):
    dataholder = []
    for casse in data['case']:
        if casse['Death'].strip() == death:
            dataholder.append(casse)
    return jsonify(dataholder)


@app.route("/country/<country>")
def countryselector(country):
    dataholder = []
    for casse in data['case']:
        if casse['country'].strip() == country:
            dataholder.append(casse)
    return jsonify(dataholder)


if __name__ == '__main__':
    app.run(debug=True)