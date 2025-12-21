const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({status: 'ok'}));
app.post('/pay', (req, res) => {
  const {amount, card} = req.body;
  // mock: rastgele success/fail
  if (!amount) return res.status(400).json({error: 'amount required'});
  const success = Math.random() > 0.2;
  return res.json({success, amount, id: Math.floor(Math.random()*100000)});
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log('payments-mock listening', port));

