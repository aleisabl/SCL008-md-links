#!/usr/bin/env node

let fs = require('fs')
let markdownLinkExtractor = require('markdown-link-extractor')
/* let markdown = fs.readFileSync(path, utf-8);
let links = markdownLinkExtractor(markdown);     */

/* 
// -------SIRVE---------

links.forEach(function (link) {
    console.log(link);
});  */



// --------PASANDO A FUNCIÓN, NO SIRVE---------

const mdLinks = (path, encoding) => {
    return new Promise ((resolve,reject) => {
        console.log(path, encoding)
        try {
            let markdown = fs.readFileSync(path, encoding);
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



