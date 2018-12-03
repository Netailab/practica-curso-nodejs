'use strict'
const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
const { crerArchivo } = require('./multiplicar/multi');

console.log(argv.base);

/*
crerArchivo(base)
    .then(archivo => console.log(`Archivo creado ${base}`))
    .catch(e => console.log(e));
    */