#!/usr/bin/env node

const mdLinks = require("../mdLinks.js");

describe('mdLinks', () => {

  it('Debería retornar los 3 links del archivo hola.md', () => {   
    //.resolves / .rejects
    //You can also use the .resolves matcher in your expect statement, and Jest will wait for that promise to resolve. 
    expect(mdLinks.mdLinks('hola.md')).resolves.toEqual(['https://www.instagram.com/',
      'https://www.airbnb.cl/', 'https://platzi.com/']);
  });

  it('Debería retornar "error no such file or directory" para el archivo hola2.md', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('hola2.md')).rejects.toThrow("ENOENT: no such file or directory, open 'hola2.md'");
  });

  it('Debería retornar "Error: Por favor ingresa un .md" cuando se ingresa otro formato', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('index.js')).rejects.toThrow("Por favor ingresa un archivo .md");
  });

  /* it('Debería retornar "Error: Por favor ingresa un .md" cuando se ingresa otro formato', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('hola.md', validate)).resolve.toThrow("status: ok");
  });

  it('Debería retornar "Error: Por favor ingresa un .md" cuando se ingresa otro formato', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('hola.md', validate)).rejects.toThrow("Los links están caídos");
  });

  it('Debería retornar "Error: Por favor ingresa un .md" cuando se ingresa otro formato', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('hola.md', stats)).resolve.toThrow("3");
  });

  it('Debería retornar "Error: Por favor ingresa un .md" cuando se ingresa otro formato', ()  => {
    //Use .toThrow to test that a function throws when it is called
    expect(mdLinks.mdLinks('hola.md', stats)).rejects.toThrow("0. No hay links");
  }); */

})  
