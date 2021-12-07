export default function handler(req, res) {
  if (req.method === 'GET' && req.query['hub.verify_token'] === 'kCcJDqrS41')
    res.send(req.query['hub.challenge']);
  if (req.method === 'POST')
    console.log(
      req.body.entry.map((message) => console.log(message.messaging))
    );
  res.send('ok');
}
