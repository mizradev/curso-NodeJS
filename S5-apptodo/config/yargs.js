const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea por hacer'
}

const completado = {
  default: true,
  alias: 'c',
  desc:'Marca como completado la tarea'
}

const argv = require('yargs')
  .command('crear', 'Crear una tarea por hacer', {
    descripcion
  }).command('actualizar', 'Actualiza una tarea por hacer', {
    descripcion,
    completado
  }).command('borrar', 'Borra una tarea del listado',{
    descripcion
  })
.help()
.argv;

module.exports = { argv }
