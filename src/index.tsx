import React from "react";
import { renderToStaticMarkup } from "react-dom/server.js";
import UIXForm from "samples/form/index";

export default () => renderToStaticMarkup(<UIXForm />);
