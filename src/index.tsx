import React from "react";
import { renderToStaticMarkup } from "react-dom/server.js";
import SpinBoxs from "samples/SpinBoxs";

export default () => renderToStaticMarkup(<SpinBoxs />);
