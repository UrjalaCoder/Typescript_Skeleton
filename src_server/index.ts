import express from 'express';
import bodyParser from 'body-parser';

interface Message {
  user: string;
  message: string;
  timestamp: number;
  id: number;
}

const app: express.Application = express();

app.use(bodyParser.json());

const messages: Message[] = []
const oldIds: number[] = []

app.get('/', (_req: express.Request, res: express.Response) => {
  res.send(JSON.stringify({
    messages,
    messageCount: messages.length
  }));
});

app.post('/', (req: express.Request, res: express.Response) => {

  let newId = Math.floor(Math.random() * 30000)
  while(oldIds.indexOf(newId) > -1) {
    newId = Math.floor(Math.random() * 30000)
  }
  const newMessage: Message = {
    ...req.body,
    timestamp: Date.now(),
    id: newId
  }

  oldIds.push(newId);
  messages.push(newMessage);
  res.send(JSON.stringify({
    success: true
  }));
});


app.listen(3001, () => {
  console.log("Server started!");
});
