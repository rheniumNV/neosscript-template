import React from "react";
import express from "express";
import DownloadPage from "./pages/DownloadPage";
import { render } from "./Rendering";
import NeosObject from "NeosObject";

const server = express();
const port = process.env.PORT || 3000;
const startedTime = new Date();

server.get("/", (_req, res) => {
  const page = render(<DownloadPage />, {
    title: "neoscript console",
    description: "neoscriptで生成したアイテムをダウンロードできます。",
  });
  res.status(200).send(page);
});

server.get("/api/obj.json", (req, res) => {
  const { p: params } = req.query ?? {};

  res.json(JSON.parse(NeosObject.toNeosObject({ Size: [1, 0.5, 1] })));
});

server.get("/api/start_time", (req, res) => {
  res.send(startedTime);
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
