import React from "react";
import express from "express";
import NeosObject from "NeosObject";
const path = require("path");

const server = express();
const port = process.env.PORT || 3000;
const startedTime = new Date();

server.use(express.static(path.join(__dirname, "public")));

server.get("/api/obj.json", (req, res) => {
  const { p: params } = req.query ?? {};

  res.json(JSON.parse(NeosObject.toNeosObject(JSON.parse(params ?? "{}"))));
});

server.get("/api/start_time", (req, res) => {
  res.send(startedTime);
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
