#!/usr/bin/env node

const fs = require('fs')
const pathLibrary = require ('path')
 
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
  

/* const yargs = require ('yargs') */
    /* 
    
yargs.command({
    command: 'validate',
    description: 'options'
})

console.log(yargs.argv) */

module.exports = {
    mdLinks
} 