#!/usr/bin/env node
const mdLinks = require('./md-links.js')
let markdownLinkExtractor = require('markdown-link-extractor')

mdLinks.mdLinks(process.argv[2])
.then(res => {
  let links = markdownLinkExtractor(res)
  console.log(links);
})

/* The example below prints all of the files in a directory that have the .md file extension:

const FileHound = require('filehound');
 
const files = FileHound.create()
  .paths('/some/dir') // process.argv[2] or path
  .ext('md')
  .find();
 
files.then(console.log); */

/* README ejemplos

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);
mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
*/