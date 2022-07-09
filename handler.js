const express = require('express');
const cors = require('cors');
const {
  
} = require('./src/routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));

app.use(express.static('public'));

// app.use('/general', generalRoutes);

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
