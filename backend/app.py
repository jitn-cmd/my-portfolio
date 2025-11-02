from flask import Flask, request, jsonify, send_from_directory #app.py
from flask_mysqldb import MySQL
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Hite@8120'
app.config['MYSQL_DB'] = 'portfolio'

# File Upload Configuration
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'pdf', 'doc', 'docx'}

mysql = MySQL(app)
CORS(app)  # CORS setup

# Function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# Home Route
@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Flask Backend!"

# Add a New Note with file
@app.route('/notes', methods=['POST'])
def add_note():
    data = request.form
    title = data.get('title')
    content = data.get('content')

    # File Handling
    if 'file' in request.files:
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        else:
            return jsonify({"error": "Invalid file format!"}), 400
    else:
        filename = None

    try:
        cursor = mysql.connection.cursor()
        cursor.execute("INSERT INTO notes (title, content, file) VALUES (%s, %s, %s)", (title, content, filename))
        mysql.connection.commit()
        cursor.close()
        return jsonify({"message": "Note added successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Get all Notes
@app.route('/notes', methods=['GET'])
def get_notes():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT id, title, content, file FROM notes")
        notes = cursor.fetchall()
        cursor.close()

        # Convert result to a list of dictionaries
        result = [{"id": note[0], "title": note[1], "content": note[2], "file": note[3]} for note in notes]
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Delete a Note
@app.route('/notes/<int:id>', methods=['DELETE'])
def delete_note(id):
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM notes WHERE id = %s", (id,))
        note = cursor.fetchone()

        if note:
            cursor.execute("DELETE FROM notes WHERE id = %s", (id,))
            mysql.connection.commit()
            cursor.close()
            return jsonify({"message": "Note deleted successfully!"}), 200
        else:
            cursor.close()
            return jsonify({"message": "Note not found!"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Serve files (for download)
@app.route('/files/<filename>', methods=['GET'])
def download_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    # Ensure upload folder exists
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])

    app.run(debug=True)
