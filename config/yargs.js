const descripcion = {
    demand: true,
    alias: 'd',
    desc: ' descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'marca completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de un elemento', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}