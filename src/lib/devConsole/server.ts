import React from "react";
import express from "express";
import lib from "index";
import _ from "lodash";
const path = require("path");

const server = express();
const port = process.env.PORT || 3000;
const startedTime = new Date();

server.use(express.static(path.join(__dirname, "public")));

server.get("/api/obj.json", (req, res) => {
  const params = _.get(req, ["query", "p"], "{}");
  if (typeof params != "string") {
    res.status(400).send("error");
    return;
  }
  res.json(JSON.parse(lib.toNeosObject(JSON.parse(params))));
});

server.get("/api/obj", (req, res) => {
  const params = _.get(req, ["query", "p"], "{}");
  if (typeof params != "string") {
    res.status(400).send("error");
    return;
  }
  res.json(JSON.parse(lib.toNeosObject(JSON.parse(params))));
});

server.get("/api/obj.7zbson", (req, res) => {
  const params = _.get(req, ["query", "p"], "{}");
  if (typeof params != "string") {
    res.status(400).send("error");
    return;
  }
  res.json(JSON.parse(lib.toNeosObject(JSON.parse(params))));
});

server.get("/api/start_time", (req, res) => {
  res.send(startedTime);
});

server.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
