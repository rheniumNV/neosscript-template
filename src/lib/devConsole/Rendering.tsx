import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

const renderTemplate = ({ title, description, content, style }) => {
  return `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="${description}" />
        ${style}
    </head>
    <body style="margin:0">
      ${content}
    </body>
</html>
`;
};

export const render = (component, { title, description }) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(sheet.collectStyles(component));
  const style = sheet.getStyleTags();
  return renderTemplate({
    title,
    description,
    style,
    content,
  });
};
