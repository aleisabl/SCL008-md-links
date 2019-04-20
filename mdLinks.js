/*  "use strict";

let fs = require('fs');
let markdownLinkExtractor = require('markdown-link-extractor');
let markdown = fs.readFileSync('README.md', 'utf-8');
let links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
    console.log(link, 'Zelda');
}); 
 */

/* let fs = require('fs');

const readFilePromise = (file,cod) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, cod, (error, data) => {
            if(error) return reject(error);
            resolve(data);
        })
    });
}

const indexPromise = readFilePromise('README.md', 'utf-8');
indexPromise
.then((data) => {
    console.log(data);
    return readFilePromise('README.md', 'utf-8');
})
.catch(console.error)
 */

"use strict";

let fs = require('fs');
let markdownLinkExtractor = require('markdown-link-extractor');
let markdown = fs.readFileSync('README.md', 'utf-8');
let links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
    console.log(link, 'Zelda');
}); 