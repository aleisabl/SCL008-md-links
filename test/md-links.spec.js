#!/usr/bin/env node

const mdLinks = require("../mdLinks.js");

describe('mdLinks', () => {

  it('Si recibe un archivo .md, retorna links', () => {
    expect(mdLinks.mdLinks('README.md')).toBe(link);
  });

  it('Si no recibe un archivo .md, retorna false', () => {
    expect(mdLinks.mdLinks('index.js')).toBe(false);
  });

})  


/* const math = require('../md-links.js');

describe('function sum', () => {

  it('adds 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
  });
  it('deberia retornar 4 para 2+2', () => {
    expect(math.sum(2,2)).toBe(4);
  }); 
  it('deberia retornar false para 2+a', () => {
    expect(math.sum(2,'a')).toBe(false);
  }); 

})

describe('function multiply', () => {

  it('multiply 2 * 2 to equal 4', () => {
    expect(math.multiply(2, 2)).toBe(4);
  });

})  */