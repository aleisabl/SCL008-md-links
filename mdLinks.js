#!/usr/bin/env node
"use strict";
let fs = require('fs');
const command = process.argv[2]
let markdownLinkExtractor = require('markdown-link-extractor');
let markdown = fs.readFileSync(command, 'utf-8');
let links = markdownLinkExtractor(markdown);
const yargs = require('yargs')

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
