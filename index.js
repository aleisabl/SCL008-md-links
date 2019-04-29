#!/usr/bin/env node

const mdLinks = require('./md-links.js')
const markdownLinkExtractor = require('markdown-link-extractor')
const axios = require('axios')
const yargs = require ('yargs')

/* ---AQUÍ SE MUESTRA COMO OBJETO CON ARRAYS---

mdLinks.mdLinks(process.argv[2])
.then(res => {
  let links = markdownLinkExtractor(res)
  console.log(links);
}) */

mdLinks.mdLinks(process.argv[2])

.then(res => {

  const links = markdownLinkExtractor(res)
  links.map(link => {
    axios.get(link)
    .then(resolveOK => {
      console.log(link, 'status: OK');
    })
    .catch(errorDOWN => {
      console.log(link, 'status: DOWN');
    })
  })
  
})
/* The example below prints all of the files in a directory that have the .md file extension:

const FileHound = require('filehound');
 
const files = FileHound.create()
  .paths('./pruebas')
  .ext('md')
  .find();

files.then(console.log); */

yargs.command({
  command: '--validate',
  alias: 'validate',
  command: '--stats',
  alias: 'stats',
  command: '--version',
  alias: 'v'
})

console.log(yargs.argv) 