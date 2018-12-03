'use strict'

const fs = require('fs');

let crerArchivo = (base) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introduciodo ${base} no es un número`);
            return;
        }
        let resultado = '';
        for (let i = 1; i <= 12; i++) {
            resultado += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-de-${base}.txt`, resultado, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
}

module.exports = {
    crerArchivo: crerArchivo
}