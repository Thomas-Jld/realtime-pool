import time

import socketio

sio = socketio.Client()

sio.connect("https://vps.thomasjuldo.com/", socketio_path='/realtimepool/socket.io/')

sio.emit('update_data', [[0.7, 0.5]])
