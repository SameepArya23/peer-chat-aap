const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
// const { PeerServer } = require('peer');
// const port = process.env.PORT || 9000;

router.get("/", (req, res) => {
    res.send("App is running..");
});

// const peerServer = PeerServer({ port: port, path: '/myapp' });

// app.listen(port, () => console.log(`PeerJS server running on port ${port}`));

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);