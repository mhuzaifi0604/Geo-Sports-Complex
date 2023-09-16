from flask import Flask, jsonify, request
from flask_cors import CORS
#from pymongo import Mongoclient

# mongo_uri = ""

# client = MongoClient(mongo_uri)
# db = client.get_database('users')

app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def hello_world():
    return 'API is Running, Perform Your Tasks'


@app.route('/register', methods=['POST'])
def register():
    print('Got in Register')
    try:
        data = request.get_json()
        print('Data reieved from frontend: ', data)
        return ({'message': 'Data Recieved successfully!'})
    except:
        return {'messgage': 'Something Went Wrong!'}


@app.route('/login', methods=['POST'])
def Login():
    print('get in Login!')
    try:
        data = request.get_json()
        email = data['email']
        password = data['password']
        print("Email: ", email, ", Password: ", password)
        return {'message': 'Data recieved successfully'}
    except:
        return {'message': 'Something Went Wrong!'}




if __name__ == "__main__":
    app.run(debug=True)