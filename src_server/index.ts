import express from 'express';
import path from 'path';

const app: express.Application = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (_req: express.Request, res: express.Response): void => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log("Server started!");
});
