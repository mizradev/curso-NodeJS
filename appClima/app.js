const argv = require('yargs').options({
  direccion:{
    alias: 'd',
    desc: 'direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

console.log(argv.direccion);
