const { PeerServer } = require('peer');
const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req, res) => res.send('PeerJS Server is running'));

const peerServer = PeerServer({ port: port, path: '/myapp' });

app.listen(port, () => console.log(`PeerJS server running on port ${port}`));