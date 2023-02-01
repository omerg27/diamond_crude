from flask import Flask,request,jsonify
from flask_cors import CORS
import pandas as pd
app = Flask(__name__)
CORS(app)
import csv




@app.route("/")
def index():
    df = pd.read_csv("data_base.csv")
    return (df.to_dict(orient="records"))

@app.route('/add', methods=['POST'])
def add_diamond():
    sd=request.get_json()
    # Get the data from the request
    carat = sd['carat']   
    cut = sd['cut']
    color = sd['color']
    clarity = sd['clarity']
    depth = sd['depth']
    table = sd['table']
    price = sd['price']
    x = sd['x']
    y = sd['y']
    z = sd['z']

    # Create a dictionary from the data
    diamond_data = {
        'carat': carat,
        'cut': cut,
        'color': color,
        'clarity': clarity,
        'depth': depth,
        'table': table,
        'price': price,
        'x': x,
        'y': y,
        'z': z
    }
    # Read the CSV database into a Pandas DataFrame
    df = pd.read_csv('data_base.csv')
    # Append the new data to the DataFrame
    df = df.append(diamond_data, ignore_index=True)
    # Write the DataFrame back to the CSV database
    df.to_csv('data_base.csv', index=False)
    return 'Data added successfully'

@app.route('/update/<int:diamond_id>', methods=['PUT'])
def update(diamond_id):
    # Get the data from the request
    request_data = request.get_json()
    dat=request_data.qury.get(diamond_id)
    diamond = request_data.get('diamond')
    carat = request_data.get('carat')   
    cut = request_data.get('cut')
    color = request_data.get('color')
    clarity = request_data.get('clarity')
    depth = request_data.get('depth')
    table = request_data.get('table')
    price = request_data.get('price')
    x = request_data.get('x')
    y = request_data.get('y')
    z = request_data.get('z')

    # Check if the diamond with the specified ID exists
    df = pd.read_csv('data_base.csv')
    diamond_data = df.loc[df['1'] == diamond_id]
    if diamond_data.empty:
        return jsonify({'error': 'Diamond with ID {} not found'.format(diamond_id)}), 404
    else:
        # Update the diamond data
        diamond_data.at[diamond_data.index[0], 'diamond'] = diamond
        diamond_data.at[diamond_data.index[0], 'carat'] = carat
        diamond_data.at[diamond_data.index[0], 'cut'] = cut
        diamond_data.at[diamond_data.index[0], 'color'] = color
        diamond_data.at[diamond_data.index[0], 'clarity'] = clarity
        diamond_data.at[diamond_data.index[0], 'depth'] = depth
        diamond_data.at[diamond_data.index[0], 'table'] = table
        diamond_data.at[diamond_data.index[0], 'price'] = price
        diamond_data.at[diamond_data.index[0], 'x'] = x
        diamond_data.at[diamond_data.index[0], 'y'] = y
        diamond_data.at[diamond_data.index[0], 'z'] = z

        # Write the updated data back to the CSV file
        df.to_csv('data_base.csv', index=False)

    return jsonify({'message': 'Diamond with ID {} updated successfully'.format(diamond_id)})






if __name__ == '__main__':
    app.run(debug=True)


 



