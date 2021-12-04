const environment = require('../../../../../../../../environment');

export default function handler(req, res) {
  const htmlTemplate = require(`../../../../../../../../public/integration/${req.query.version}/integration.handlebars.html`);
  const jsTemplate = require(`../../../../../../../../public/integration/${req.query.version}/integration.handlebars.js`);

  const backendUrl = req.headers.host.includes(':')
    ? `http://${req.headers.host}`
    : `https://${req.headers.host}`;

  const cssUrl = `${backendUrl}/integration/${req.query.version}/integration.handlebars.css`;

  const phantChatHTML = htmlTemplate({ cssUrl });
  const javascript = jsTemplate({
    site: req.query.site,
    chatAppUrl: environment.chatAppUrl,
    phantChatHTML: phantChatHTML,
    backgroundBubbleImage: `${backendUrl}/images/chat.svg`,
  });

  res.send(javascript);
}
