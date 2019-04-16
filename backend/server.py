from flask import Flask
from flask import request
import smtplib
import json
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def hello():
    return json.dumps({'message': "Hello World!"})

@app.route("/addGeoLocation")
@cross_origin()
def geoLocation():
    return "Geo location added"

@app.route("/sendEmail")
@cross_origin()
def geoLocation2():
    Data = request.headers['Update']

    print(Data)
    fileStrAlert = json.loads(Data)['address']['road']
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login("jessekhora@gmail.com", "fackE3$news45")
    server.sendmail("jessekhora@gmail.com", "jessekhorasanee@gmail.com", fileStrAlert)
    server.quit()
    return "Geo location added"
if __name__ == '__main__':
    app.run()
