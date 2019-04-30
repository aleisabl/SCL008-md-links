#!/usr/bin/env node

const mdLinks = require('./md-links.js')
const markdownLinkExtractor = require('markdown-link-extractor')
const axios = require('axios')
const chalk = require ('chalk')
const underscore = require('underscore');
const linksObject = [];

mdLinks.mdLinks(process.argv[2])

  .then(res => {
    const links = markdownLinkExtractor(res)
    if (process.argv[3] != '--validate' && process.argv[3] != '--stats' && process.argv[3] != null ){
      throw(new Error("Ese comando no existe, intenta: --validate")); 
    }else

    links.map((link, index) => {
      axios.get(link)
      .then(resolveOK1 => {
        linksObject.push({
          href: link,
          text: resolveOK1.request.connection.servername,
          file: __filename
        })
      })
      .catch(errorDOWN1 => {
        linksObject.push({
          href: link,
          text: errorDOWN1.request.connection.servername,
          file: __filename
        })
      }).then(resolveOK1 => {
        if(links.length === linksObject.length) {
          console.log(linksObject - 1)
        }
      })
  })

})

mdLinks.mdLinks(process.argv[2], '--validate')

  .then(res => {
    if (process.argv[3] === '--validate'){
    const links = markdownLinkExtractor(res)
    links.map((link, index) => {
      axios.get(link)
      .then(resolveOK2 => {
        linksObject.push({
          href: link,
          status: 'OK',
          text: resolveOK2.request.connection.servername,
          file: __filename
        })
      })
      .catch(errorDOWN2 => {
        linksObject.push({
          href: link,
          status: 'DOWN',
          text: errorDOWN2.request.connection.servername,
          file: __filename
        })
      }).then(resolveOK2 => {
        if(links.length === linksObject.length) {
          console.log(linksObject - 1)
        }
      })
  })
  
}

})


mdLinks.mdLinks(process.argv[2], '--stats')

.then(res => {
  if (process.argv[3] === '--stats'){
  const links = markdownLinkExtractor(res)
  links.map((link, index) => {
    axios.get(link)
    .then(resolveOK3 => {
      linksObject.push({
        href: link,
        text: resolveOK3.request.connection.servername,
        file: __filename
      })
    })
    .catch(errorDOWN3 => {
      linksObject.push({
        href: link,
        text: errorDOWN3.request.connection.servername,
        file: __filename,
        broken: underscore.size(link)
      })
    }).then(resolveOK3 => {
      if(links.length === linksObject.length) {
        console.log(linksObject - 1)
        console.log('Total links :' + underscore.size(linksObject))
      }
    })
})

}

})



/* The example below prints all of the files in a directory that have the .md file extension:

const FileHound = require('filehound');
 
const files = FileHound.create()
  .paths('./pruebas')
  .ext('md')
  .find();

files.then(console.log); */