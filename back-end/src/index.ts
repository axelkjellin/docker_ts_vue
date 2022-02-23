import express from 'express';
import "reflect-metadata";
const app = express();

app.get('/', (req, res) => res.send('oiasdoi'));

app.listen(4000, () => {
  console.log(`server running on port 4000`);
});