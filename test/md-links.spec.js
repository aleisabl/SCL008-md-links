#!/usr/bin/env node

const mdLinks = require("../md-links.js");

describe('mdLinks', () => {

  it('Debería retornar los 3 links del archivo hola.md', async() => {   
    //.resolves / .rejects
    //You can also use the .resolves matcher in your expect statement, and Jest will wait for that promise to resolve. 
    await expect(mdLinks.mdLinks('hola.md')).resolves.toEqual('[Trello](https://trello.com/)',
    '[Airbnb](https://airbnb.cl/)',
    '[PlatziMalo](https://pla34dfakjsdh.com/)');
  });

  it('Debería retornar "error no such file or directory" para el archivo hola2.md', async()  => {
    //Use .toThrow to test that a function throws when it is called
    await expect(mdLinks.mdLinks('hola2.md')).rejects.toThrow("ENOENT: no such file or directory, open 'hola2.md'");
  });

  it('Debería retornar "Error: Por favor ingresa un .md" cuando se ingresa otro formato', async()  => {
    //Use .toThrow to test that a function throws when it is called
    await expect(mdLinks.mdLinks('index.js')).rejects.toThrow("Por favor ingresa un archivo .md");
  });


})  