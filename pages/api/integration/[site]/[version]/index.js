const environment = require('../../../../../environment');

const getHtmlFromTemplate = (version) => {
  const htmlTemplate = require(`../../../../../public/integration/${version}/integration.handlebars.html`);
  const cssUrl = `${environment.backendUrl}/integration/${version}/integration.handlebars.css`;
  return htmlTemplate({ cssUrl });
};

export default function handler(req, res) {
  const phantChatHTML = getHtmlFromTemplate(req.query.version);
  const jsTemplate = require(`../../../../../public/integration/${req.query.version}/integration.handlebars.js`);
  const javascript = jsTemplate({
    site: req.query.site,
    chatAppUrl: environment.chatAppUrl,
    phantChatHTML: phantChatHTML,
    backgroundBubbleImage: `${environment.backendUrl}/images/chat.svg`,
  });

  res.send(javascript);
}
