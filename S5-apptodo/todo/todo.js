const fs = require('fs');
let listadoTodo = [];

// Funcion que guarda las tareas en el json
const guardarDB = () => {
  let data = JSON.stringify(listadoTodo);
  fs.writeFile('data.json', data, (err) =>{
    if (err) throw Error('No se pudo grabar', err);
  });
}
// lee las tareas del json
const cargarDB = () =>{
  try{
      listadoTodo = require('../data.json');
  }catch(err){
    listadoTodo = [];
  }
}

// agrega un registro de tarea al json
const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false
  }
  listadoTodo.push( porHacer );
  guardarDB();
  return porHacer;
}


const getListado = () =>{
  cargarDB();
  return listadoTodo ? listadoTodo : [];
}

const actualizar = (descripcion, completado = true) =>{
  cargarDB();
  let index = listadoTodo.findIndex(tarea => {
    return tarea.descripcion === descripcion
  });

  if(index >= 0){
    listadoTodo[index].completado = completado;
    guardarDB();
    return true;
  }else{
    return false;
  }

}

const borrar = (descripcion) => {
  cargarDB();

  let nuevoListado = listadoTodo.filter(tarea => {
    return tarea.descripcion != descripcion;
  });

  if(listadoTodo.length === nuevoListado.length){
    return false;
  }else{
    listadoTodo = nuevoListado;
    guardarDB();
    return true;
  }
}


// exportamos el metodo crear
module.exports = { crear, getListado, actualizar, borrar };
