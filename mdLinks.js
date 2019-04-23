#!/usr/bin/env node

let fs = require('fs')
let markdownLinkExtractor = require('markdown-link-extractor')
const Path = require('path');

const mdLinks = (path) => {
    return new Promise ((resolve,reject) => {
        try {

            if(Path.extname(path)!=".md"){
                throw(new Error("Por favor ingresa un .md"));
            }

            let markdown = fs.readFileSync(path, 'utf-8');
            let links = markdownLinkExtractor(markdown);  
            
            resolve(links);
        }
        catch(error){
            reject(error)
        }
    })
}

module.exports = {
     mdLinks
 } 



