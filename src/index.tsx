import React from "react";
import { renderToStaticMarkup } from "react-dom/server.js";
import App from "./app";

export default () => renderToStaticMarkup(<App />);
