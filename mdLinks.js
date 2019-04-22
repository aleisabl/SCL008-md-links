#!/usr/bin/env node

let fs = require('fs');
const yargs = require('yargs')

const command = process.argv[2]
let markdownLinkExtractor = require('markdown-link-extractor');
let markdown = fs.readFileSync(command, 'utf-8');
let links = markdownLinkExtractor(markdown);


yargs.version('1.1.0')

 yargs.command( {
     command: 'options',
     describe: 'Add a new option',
     handler: function () {
         console.log('adding option')
     }
 })

 console.log(yargs.argv)

 links.forEach(function (link) {
     console.log(link);
 });
