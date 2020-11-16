const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");

const app = express();

app.use(cors());
app.use("/ping", (req, res) => res.send("OK"));

module.exports = functions.https.onRequest(app);
