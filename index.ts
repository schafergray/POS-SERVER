import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
    // origin: 'https://schafergray.github.io'
    origin: 'http://localhost:4200'
}))
app.use(bodyParser.json());
app.get('/discounts', (req: any, res: any) => {
  let basket = req.basket;
  // Logic to scour the basket for items that match discounts
  res.json(basket)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});