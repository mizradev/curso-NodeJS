
const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
  direccion:{
    alias: 'd',
    desc: 'direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

lugar.getLugarLatLng(argv.direccion)
  .then(res => {
    console.log(res);
  })
