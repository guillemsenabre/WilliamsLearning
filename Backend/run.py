from flask import Flask, jsonify, request
import json

app = Flask(__name__)

# Path to your JSON file
data_file = ".data/data.json"


@app.route("/get_data", methods=["GET"])
def get_data():
  """
  API endpoint to fetch data from JSON file.
  """
  try:
    with open(data_file, "r") as f:
      data = json.load(f)
    print(data)
    return jsonify(data)
  except FileNotFoundError:
    return jsonify({"error": "Data file not found"}), 404
  except json.JSONDecodeError:
    return jsonify({"error": "Invalid JSON data"}), 400

'''
@app.route("/update_data", methods=["POST"])
def update_data():
  """
  API endpoint to update data in JSON file.
  """
  try:
    # Get request data (assumes field and description are sent)
    data = request.get_json()
    field = data.get("field")
    description = data.get("description")

    # Basic validation (replace with more checks as needed)
    if not field or not description:
      return jsonify({"error": "Missing field or description"}), 400

    with open(data_file, "w") as f:
      json.dump({"field": field, "description": description}, f)
    return jsonify({"message": "Data updated successfully"})
  except Exception as e:
    return jsonify({"error": str(e)}), 500
'''

if __name__ == "__main__":
  app.run(debug=True)  # Set debug=False for production
