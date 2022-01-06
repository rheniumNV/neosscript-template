import React from "react";
import { renderToStaticMarkup } from "react-dom/server.js";
import Form from "./samples/form/index";

export default () => renderToStaticMarkup(<Form />);
