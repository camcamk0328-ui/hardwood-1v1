// A friends server for Hardwood 1v1. Run: npm install && node srv.js
const express = require('express'); const http = require('http'); const { ExpressPeerServer } = require('peer');
const app = express(); const server = http.createServer(app);
app.get('/', (req, res) => res.send('Hardwood 1v1 friends server is running.'));
app.use('/', ExpressPeerServer(server, { path: '/' }));
const port = process.env.PORT || 9000;
server.listen(port, () => console.log('friends server on port ' + port));
