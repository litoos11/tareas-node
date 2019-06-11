//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv,
      colors = require('colors'),
      porHacer = require('./controllers/porHacer');

let comando = argv._[0];

switch (comando) {
  case 'crear':    
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
  case 'listar':
    //console.log('Mostrar todas las tareas');
    let listado = porHacer.getListado();

    for(let tarea of listado){
      console.log('==========POR HACER=========='.green);
      console.log(tarea.descripcion);
      console.log('Esatado: ', tarea.completado);
      console.log('============================='.green);
    }
    
    break;
  case 'actualizar':
    //console.log('Actualiza una tarea por hacer');
    let isActualizado = porHacer.updateTarea(argv.descripcion, argv.completado);
    console.log(isActualizado);
    break;
  
  case 'eliminar':
    //console.log('Actualiza una tarea por hacer');
    let isEliminado = porHacer.deleteTarea(argv.descripcion);
    console.log(isEliminado);
    break;

  default:
    console.log('Comando no reconocido');
    break;
}