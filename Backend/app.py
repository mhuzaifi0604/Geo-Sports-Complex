from flask import Flask, jsonify, request
from flask_cors import CORS
import pymongo

myclient = pymongo.MongoClient("mongodb+srv://Dostel:dostel123@dostel.opowh3w.mongodb.net/?retryWrites=true&w=majority")
db = myclient['SportsComplex']
collection = db['Users']

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": ["http://127.0.0.1:5173", "http://127.0.0.1:5000/login"]}})

@app.route('/')
def hello_world():
    return 'API is Running, Perform Your Tasks'


@app.route('/all-users', methods=['GET'])
def get_users():
    users = []
    All_Docs = collection.find({})
    for doc in All_Docs:
        print(doc, "\n")
        doc['_id'] = str(doc['_id'])
        users.append(doc)
    return jsonify(users)

@app.route('/register', methods=['POST'])
def register():
    print('Got in Register')
    try:
        data = request.get_json()
        new_data = data['data']
        print('Data reieved from frontend: ', new_data)
        document = {"email":new_data['email'], "password": new_data['password'], "username": new_data['username'], "vendor":new_data['vendor']}
        collection.insert_one(document)
        return {'message': 'Data recieved successfully'}
    except:
        return {'messgage': 'Something Went Wrong!'}


@app.route('/login', methods=['POST'])
def login():
    print('Getting into Login!')
    try:
        data = request.get_json()
        email = data['email']
        password = data['password']
        print("Email: ", email, ", Password: ", password)
        
        query = {"email": email, "password": password}
        
        # Use find_one to retrieve a single matching document
        doc = collection.find_one(query)
        
        if doc:
            # If a document is found, return it as JSON
            return {'message': 'Login successful', 'vendor': doc}
        else:
            return {'message': 'Login failed. Invalid email or password.'}
    except Exception as e:
        print(e)
        return {'message': 'Something Went Wrong!'}




if __name__ == "__main__":
    app.run(debug=True)