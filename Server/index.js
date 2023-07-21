const express = require('express');
const cors = require('cors');

const app = express();

const TokenRouter = require('./Routes/router');
  
  // Start the server
  const port = 8000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('We up!!');
});

app.use("/pay", TokenRouter); 