const http  = require('http');

http.createServer( (req, res) => {

  res.writeHead(200, { 'Content-Type': 'application/json' });

  let json = {
    nombre: 'Jorge',
    edad: 25,
    url: req.url
  }

  res.write( JSON.stringify(json) );

  //res.write('Hola');
  res.end();
}).listen(3000);

console.log('Escuchando en el puerto localhost:3000');
