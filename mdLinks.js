#!/usr/bin/env node

let fs = require('fs')
let markdownLinkExtractor = require('markdown-link-extractor')

//The path.parse() method returns an object whose properties represent significant elements of the path

// Create reference instance
var myMarked = require('marked');

// Get reference
var renderer = new myMarked.Renderer();

const mdLinks = (path) => {
    return new Promise ((resolve,reject) => {
        try {

            // Path.extname arroja la extensión de el archivo que se la pasa
            // A TypeError is thrown if path is not a string.
            
            if(librPath.extname(path)!=".md"){
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



