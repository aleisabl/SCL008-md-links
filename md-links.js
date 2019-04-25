#!/usr/bin/env node

let fs = require('fs')
const pathLibrary = require ('path')
 
/* const yargs = require ('yargs') */

// readFile como una Promesa
const mdLinks = (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (error, content) => {

        if (pathLibrary.extname(path)!=".md") {
            throw(new error("Por favor ingresa un archivo .md"));

        } else {
          resolve(content);
        }
  
      });
    });
  }
  

    /* 
    
yargs.command({
    command: 'validate',
    description: 'options'
})

console.log(yargs.argv) */

module.exports = {
    mdLinks
} 