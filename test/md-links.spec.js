#!/usr/bin/env node

const mdLinks = require("../mdLinks.js");

describe('mdLinks', () => {

  it('Debería retornar los 3 links del archivo hola.md', () => {   
    //.resolves / .rejects
    //You can also use the .resolves matcher in your expect statement, and Jest will wait for that promise to resolve. 
    expect(mdLinks.mdLinks('hola.md')).resolves.toEqual(['https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
      'https://nodejs.org/api/fs.html', 'https://nodejs.org/api/path.html']);
  });

  it('Debería retornar "error no such file or directory" para el archivo hola2.md', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('hola2.md')).rejects.toThrow("ENOENT: no such file or directory, open 'hola2.md'");
  });

  it('Debería retornar "Error: Por favor ingresa un .md" cuando se ingresa otro formato', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('index.js')).rejects.toThrow("Por favor ingresa un .md");
  });


})  
