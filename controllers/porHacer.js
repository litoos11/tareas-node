const fs = require('fs');

let listadoPorHacer = [];


const saveDB = () => {
  //readDB();

  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile(`db/data.json`, data, (err) => {
    if(err)
      throw new Error('No de pudo guardar la tarea');
  });
}


const readDB = () => {
  try{
    listadoPorHacer = require('../db/data.json');
  }catch(err){
    listadoPorHacer = [];
  }
  
  console.log(listadoPorHacer);
}

const crear = (descripcion) => {
  readDB();

  let porHacer = {
    descripcion: descripcion,
    completado: false
  }

  listadoPorHacer.push(porHacer);
  saveDB();
  return porHacer;
}

const getListado = () => {
  // return new Promise((resolve, reject) => {
  //   reject(readDB);
  // })
  readDB();
  return listadoPorHacer;
}

const updateTarea = (descripcion, completado = true) => {
  readDB();

  let index = listadoPorHacer.findIndex( tarea => {
    return tarea.descripcion === descripcion;
  });

  if(index >= 0){
    listadoPorHacer[index].completado = completado;
    saveDB();
    return true;
  }else{
    return false;
  }
}

const deleteTarea = (descripcion) => {
  readDB();

  let nuevoListado = listadoPorHacer.filter((tarea) => {
    return tarea.descripcion != descripcion;
  });

  if(listadoPorHacer.length === nuevoListado.length){
    return false;
  }else{
    listadoPorHacer = nuevoListado;
    saveDB();
    return true;
  }
}

module.exports = {
  crear,
  getListado,
  updateTarea,
  deleteTarea
}
