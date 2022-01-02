import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./app";

export default ({ htmlWebpackPlugin }) => renderToStaticMarkup(<App />);
