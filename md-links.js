#!/usr/bin/env node

const fs = require('fs')
const pathLibrary = require ('path')

  const mdLinks = (path) => {
    return new Promise((resolve, reject) => {

        try {
            if (pathLibrary.extname(path)!=".md"){
                throw(new Error("Por favor ingresa un archivo .md"));
            }else if (typeof path === 'undefined'){
                throw(new Error("hola estoy viendo si sirve esto"));
            }

            fs.readFile(path,'utf-8',(err, content)=>{
                if(err){
                    reject(err);
                }
                resolve(content);
            })  
        }
        catch(error){
            reject(error);
        }
        
    })
}

module.exports = {
    mdLinks
} 