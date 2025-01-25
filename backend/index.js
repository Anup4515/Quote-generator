import express from 'express';
import connectDB from './connection/connection.js';
import Quote from './models/todoschema.js';
import cors from 'cors';
const app = express();
const port = 5500;

app.use(express.json());


app.use(cors());

console.log("Starting server...");

connectDB();

app.get('/', (req, res) => {
  res.send(obj.name);
});

app.get('/api/quote', async (req, res) => {
  try {
    const count = await Quote.countDocuments(); // Get total number of quotes
    const randomIndex = Math.floor(Math.random() * count); // Generate a random index
    const randomQuote = await Quote.findOne().skip(randomIndex); // Fetch the random quote
    res.json(randomQuote); // Send the quote as JSON
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})