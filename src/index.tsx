import React from "react";
import { renderToStaticMarkup } from "react-dom/server.js";
import Box from "./samples/Box";

export default () => renderToStaticMarkup(<Box />);
