from flask import Flask, render_template, send_from_directory
from flask_socketio import SocketIO
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app)
socketio = SocketIO(app, path='/realtimepool/socket.io')

ball_positions = []

@socketio.on('update_data')
def update_data(data):
    global ball_positions
    ball_positions = data
    socketio.emit('new_data', ball_positions)

@socketio.on('get_data')
def get_data(data):
    socketio.emit('new_data', ball_positions)

@app.route('/realtimepool', methods=['GET'])
def realtimepool():
    return render_template('index.html')

@app.route('/realtimepool/<path:path>', methods=["GET", "POST"])
def static_serving(path):
    return send_from_directory('./static', path)

if __name__ == '__main__':
    socketio.run(app)
