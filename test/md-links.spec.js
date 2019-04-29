#!/usr/bin/env node

const mdLinks = require("../md-links.js");
const markdownLinkExtractor = require('markdown-link-extractor')

describe('mdLinks', () => {

  it('Debería retornar los 3 links del archivo hola.md', async() => {   
    //.resolves / .rejects
    //You can also use the .resolves matcher in your expect statement, and Jest will wait for that promise to resolve. 
    await expect(mdLinks.mdLinks('hola.md')).resolves.toEqual('[Trello](https://trello.com/invite/b/5AGTMBps/51d6b63b1150b2b346c6c02c0ee6e4a1/markdown)',
    '[Airbnb](https://airbnb.cl/)', '[PlatziMalo](https://pla34dfakjsdh.com/)');
  });

  it('Debería retornar "error no such file or directory" para el archivo hola2.md', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('hola2.md')).rejects.toThrow("ENOENT: no such file or directory, open 'hola2.md'");
  });

  it('Debería retornar "Error: Por favor ingresa un .md" cuando se ingresa otro formato', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('index.js')).rejects.toThrow("Por favor ingresa un archivo .md");
  });

  /* it('Debería retornar el status de cada link cuando se pasa la option --validate', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('hola.md', --validate)).resolve.toThrow("status: ok");
  });

  it('Debería retornar "Error: Por favor ingresa un .md" cuando se ingresa otro formato', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('hola.md', --validate)).rejects.toThrow("Los links están caídos");
  });

  it('Debería retornar "Error: Por favor ingresa un .md" cuando se ingresa otro formato', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('hola.md', --stats)).resolve.toThrow("3");
  }); */

})  
