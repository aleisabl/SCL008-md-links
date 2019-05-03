#!/usr/bin/env node

const mdLinks = require('./md-links.js')
const markdownLinkExtractor = require('markdown-link-extractor')
const axios = require('axios')
const chalk = require ('chalk')
const underscore = require('underscore');
const linksObject = [];

mdLinks.mdLinks(process.argv[2])

  .then(res => {
    if (process.argv[3] === '--validate'){
    const links = markdownLinkExtractor(res)
    links.map((link, index) => {
      axios.get(link)
      .then(resolve => {
        linksObject.push({
          href: link,
          status: 'OK',
          text: resolve.request.connection.servername,
          file: __filename
        })
      })
      .catch(error => {
        linksObject.push({
          href: link,
          status: 'DOWN',
          text: error.request.connection.servername,
          file: __filename
        })
      }).then(resolve => {
        if(links.length === linksObject.length) {
          console.log(linksObject)
        }
      })
  })
  
} else if (process.argv[3] === '--stats'){
  mdLinks.mdLinks(process.argv[2])
  const links = markdownLinkExtractor(res)
  links.map((link, index) => {
    axios.get(link)
    .then(resolve => {
      linksObject.push({
        href: link,
        text: resolve.request.connection.servername,
        file: __filename
      })
    })
    .catch(error => {
      linksObject.push({
        href: link,
        text: error.request.connection.servername,
        file: __filename
      })
    })
    .then(resolve => {
      if(links.length === linksObject.length) {
        console.log(linksObject)
        console.log(chalk.bgMagenta('Total :' + underscore.size(linksObject)))
        console.log(chalk.bgMagenta('Broken :' + underscore.size(links)))
      }
    })

  })
} else  {

  mdLinks.mdLinks(process.argv[2])

  .then(res => {
    const links = markdownLinkExtractor(res)

    links.map((link, index) => {
      axios.get(link)
      .then(resolve => {
        linksObject.push({
          href: link,
          text: resolve.request.connection.servername,
          file: __filename
        })
      })
      .catch(error => {
        linksObject.push({
          href: link,
          text: error.request.connection.servername,
          file: __filename
        })
      }).then(resolve => {
        if(links.length === linksObject.length) {
          console.log(linksObject)
        }
      })
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