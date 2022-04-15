from flask import Flask, request, jsonify, make_response
from flask_restx import Api, Resource, fields
# from sklearn.externals 
import joblib
import numpy as np

flask_app = Flask(__name__)

app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "Iris Plant identifier", 
		  description = "Predict the type of iris plant")

name_space = app.namespace('prediction', description='Prediction APIs')
model = app.model('Prediction params', 
				  {'sepalLength': fields.Float(required = True, 
				  							   description="Sepal Length", 
    					  				 	   help="Sepal Length cannot be blank"),
				  'sepalWidth': fields.Float(required = True, 
				  							   description="Sepal Width", 
    					  				 	   help="Sepal Width cannot be blank"),
				  'petalLength': fields.Float(required = True, 
				  							description="Petal Length", 
    					  				 	help="Petal Length cannot be blank"),
				  'petalWidth': fields.Float(required = True, 
				  							description="Petal Width", 
    					  				 	help="Petal Width cannot be blank")})

# classifier = joblib.load('classifier.joblib')

@name_space.route("/")
class MainClass(Resource):
	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			formData = request.json
			print("----------------")
			print(formData)
			# prediction = classifier.predict(np.array(data).reshape(1, -1))
			scores = { 
				  "entj": np.random.randint(100),
					"entp": np.random.randint(100),
					"enfj": np.random.randint(100),
					"enfp": np.random.randint(100),
					"estj": np.random.randint(100),
					"estp": np.random.randint(100),
					"esfj": np.random.randint(100),
					"esfp": np.random.randint(100),
					"intj": np.random.randint(100),
					"intp": np.random.randint(100),
					"infj": np.random.randint(100),
					"infp": np.random.randint(100),
					"istj": np.random.randint(100),
					"istp": np.random.randint(100),
					"isfj": np.random.randint(100),
					"isfp": np.random.randint(100)
			}
			for v in scores:
				print(v, ":", scores[v])

			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": scores
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5001', debug=True)