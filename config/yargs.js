const descripcion = {
		demand: true, 
		alias: 'd',
  	desc: 'Descripcion de la tarea por hacer'	
};

const completado = {
		alias: 'c',
		default: true,
    desc: 'Marca como completado o pendiente la tarea por hacer'
}

const argv = require('yargs')
				.command('crear', 'Crea un una nueva tarea por hacer',
					{descripcion})
				.command('actualizar', 'Actualiza una tarea por hacer',
					{descripcion, completado})	
				.command('eliminar', 'Elimina una tarea por hacer',
					{descripcion})		
				.help()			
				.argv;

module.exports = {
	argv
}