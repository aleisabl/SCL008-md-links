#!/usr/bin/env node

const mdLinks = require('./md-links.js')
const markdownLinkExtractor = require('markdown-link-extractor')
const axios = require('axios')
const yargs = require ('yargs')
const linksObject = [];

mdLinks.mdLinks(process.argv[2], '--validate')

  .then(res => {
    if (process.argv[3] === '--validate'){
    const links = markdownLinkExtractor(res)
    links.map((link, index) => {
      axios.get(link)
      .then(resolveOK => {
        console.log(resolveOK.request.connection)
        linksObject.push({
          href: link,
          status: 'OK',
          text: resolveOK.request.connection.servername
        })
      })
      .catch(errorDOWN => {
        linksObject.push({
          href: link,
          status: 'DOWN',
          text: errorDOWN.request.connection.servername
        })
      }).then(resolveOK => {
        if(links.length === linksObject.length) {
          console.log(linksObject)
        }
      })
  })
  
}
})

mdLinks.mdLinks(process.argv[2], '--stats')

  .then(res => {
    if (process.argv[3] === '--stats'){
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
}
})

mdLinks.mdLinks(process.argv[2])
.then((res) => {
  if (process.argv[3] != '--validate'){
  const links = markdownLinkExtractor(res)
  links.forEach(function (link) {
    console.log(link)
  });

}

})
.catch(console.error);


/* return new Promise((resolve, reject) => {
  const links = markdownLinkExtractor(res)
  resolve(links);
  console.log(links)
}) */


/* The example below prints all of the files in a directory that have the .md file extension:

const FileHound = require('filehound');
 
const files = FileHound.create()
  .paths('./pruebas')
  .ext('md')
  .find();

files.then(console.log); */


/* yargs.command({
  command: '--validate',
  alias: 'validate',
  handler: function () {
    
  }
})

console.log(yargs.argv) */