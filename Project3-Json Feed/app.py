###read the file ###
import json
import csv
with open ('Tesla Deaths - Deaths.csv', 'r') as f:
    reader=csv.reader(f)
    next(reader)
    data={'case':[]}
    for row in reader:
        data['case'].append({'case#': row[0], 'year': row[1], 'Date': row[2], 'country': row[3].strip(), 'state': row[4].strip()
                             , 'Description': row[5], 'Death': row[6].strip(), 'Tesla driver':row[7].strip(), 'other Vehicle': row[9], 'Model': row[12], 'Autopilot Claimed': row[13], 'Verified Tesla Autopilot Deaths': row[14]})
        # print(data)
        # print(row)
    print( len(data['case'])) ## need to drop the las 7 json row
with open ('Tesla.json', 'w') as f:
    json.dump(data, f, indent=4)
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt
from flask import Flask, jsonify
# #################################################
# # Database Setup
# #################################################
# engine = create_engine(admin, ,"tesla.sql") ## do not have user name
#
# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(autoload_with=engine)
#
# # Save reference to the table
# Measurement = Base.classes.measurement
# Station = Base.classes.station
#################################################
# Flask Setup
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
        f"<h2>/year/<year></h2><br/>"
        F"NOTE:year extention eg. /year/2013 format "
        f"<h2>/case/<case></h2><br/>"
        f"NOTE:case extention eg. /case/1 format<br/>"
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
    #since flask is python base use fetch to do the work in html

@app.route("/year/<year>")
def yearselector(year):
    dataholder=[]
    for casse in data['case']:
        if casse['year'] == year:
            dataholder.append(casse)
    return jsonify(dataholder)
@app.route("/case/<case>")
def caseselector(case):
    dataholder=[]
    for casse in data['case']:
        if casse['case#'] == case:
            dataholder.append(casse)
    return jsonify(dataholder)

@app.route("/state/<state>")
def stateselector(state):
    dataholder=[]
    for casse in data['case']:
        if casse['state'] == state:
            dataholder.append(casse)
    return jsonify(dataholder)

@app.route("/death/<death>")
def daethselector(death):
    dataholder=[]
    for casse in data['case']:
        if casse['Death'].strip() == death:
            dataholder.append(casse)
    return jsonify(dataholder)
@app.route("/country/<country>")
def countryselector(country):
    dataholder=[]
    for casse in data['case']:
        if casse['country'].strip() == country:
            dataholder.append(casse)
    return jsonify(dataholder)

if __name__ == '__main__':
    app.run(debug=True)