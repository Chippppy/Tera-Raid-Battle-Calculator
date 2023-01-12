const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.post('/pokemon', async (req,res) => {
  const pokeName = req.body.name;
  console.log(pokeName);
  res.end(JSON.stringify({name:"tony"}));
})

app.get('/', (req,res) => {
  res.json({msg: "This worked :)"})
})

app.listen(3001, () => {
  console.log("Api started on PORT 3001");
})