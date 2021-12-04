const environment = require('../../../../../environment');

export default function handler(req, res) {
  const htmlTemplate = require(`../../../../../public/integration/${req.query.version}/integration.handlebars.html`);
  const jsTemplate = require(`../../../../../public/integration/${req.query.version}/integration.handlebars.js`);

  const cssUrl = `${environment.backendUrl}/integration/${req.query.version}/integration.handlebars.css`;

  const phantChatHTML = htmlTemplate({ cssUrl });

  const javascript = jsTemplate({
    site: req.query.site,
    chatAppUrl: environment.chatAppUrl,
    phantChatHTML: phantChatHTML,
    backgroundBubbleImage: `${environment.backendUrl}/images/chat.svg`,
  });

  res.send(javascript);
}
