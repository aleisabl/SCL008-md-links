#!/usr/bin/env node

let fs = require('fs')
let markdownLinkExtractor = require('markdown-link-extractor')

const mdLinks = (path) => {
    return new Promise ((resolve,reject) => {
        try {
            let markdown = fs.readFileSync(path, 'utf-8');
            let links = markdownLinkExtractor(markdown);    
            resolve(links);
        }
        catch(error){
            reject(error)
            return false;
        }
    })
}

module.exports = {
     mdLinks
 } 



