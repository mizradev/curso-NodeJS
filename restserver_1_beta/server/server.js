require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/usuarios', (req, res) => {
  res.json('get usuarios');
});

app.post('/usuario', (req, res) => {
  let body = req.body;

  if( body.nombre === undefined ){
    res.status(400).json({
      ok:false,
      mensaje:'El nombre es requerido'
    });
  }
  res.json({ persona: body });
});

app.put('/usuario/:id', (req, res) => {
  let id = req.params.id;
  res.json({ id });
});

app.delete('/usuarios', (req, res) => {
  res.json('detele usuarios');
});

app.listen(process.env.PORT, () => console.log('Server Running on: http://localhost:'+process.env.PORT));
