#!/usr/bin/env node

const fs = require('fs')
const pathLibrary = require ('path')
const markdownLinkExtractor = require('markdown-link-extractor')

  const mdLinks = (path, options) => {
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

/* mdLinks(process.argv[2])

.then((links) => {
    let links = markdownLinkExtractor(res)
    links.forEach(function (link) {
      console.log(link)
    });
  })
  .catch(console.error);
 */

module.exports = {
    mdLinks
} 