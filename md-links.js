#!/usr/bin/env node

const fs = require('fs')
const pathLibrary = require ('path')

  const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {

        try {
            if (pathLibrary.extname(path)!=".md"){
                throw(new Error("Por favor ingresa un archivo .md"));
            }

            fs.readFile(pathLibrary.resolve(path),'utf-8',(err, content)=>{
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