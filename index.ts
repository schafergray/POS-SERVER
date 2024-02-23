import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 80;
app.use(cors({
    // origin: 'https://schafergray.github.io'
    origin: 'http://localhost:4200'
}))
app.use(bodyParser.json());
app.post('/discounts', (req: any, res: any) => {
  let basket = req.body;
  let basketDiscount = Number((basket.total * 0.25).toFixed(2));
  res.send({
    basket: basket,
    discount: basketDiscount,
    statusCode: 200
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});