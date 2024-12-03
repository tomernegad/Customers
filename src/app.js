const express = require('express');
const mongoose = require('mongoose');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION || 'your_default_connection_string';
const app = express();
mongoose.set('strictQuery', false);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const names = [
  { firstname: 'John', lastname: 'Doe' },
  { firstname: 'Jane', lastname: 'Doe' },
  { firstname: 'Jim', lastname: 'shami' },
];

app.post('/api/names', (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/api/names', (req, res) => {
  res.send(names);
});

const start = async () => {
  try {
    await mongoose.connect(CONNECTION);
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
