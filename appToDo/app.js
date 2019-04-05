
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./todo/todo');

let comando = argv._[0];

switch(comando){

  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    //console.log('Crear tareas por hacer');
    break;
  case 'listar':
    let listado = porHacer.getListado();
    console.log('======== Lista - To Do ========'.green);
    for(let task of listado){
      console.log(`Task: ${task.descripcion}
        Status: ${ task.completado ? 'true'.green : 'false'.red  }`);
    }
    console.log('==============================='.green);
    //console.log('Muestra todas las tareas por hacer');
    break;
  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    //console.log('Actualiza una tarea por hacer');
    break;
  case 'borrar':
    let borrar = porHacer.borrar(argv.descripcion);
    console.log(borrar);
    break;
  default:
    console.log('Ese comando no es reconocido...\n');
}
