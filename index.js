#!/usr/bin/env node

const path = process.argv[2];
const mdLinks = require('./mdLinks.js')
mdLinks.mdLinks(path)

.then((links) => {
  links.forEach(function (link) {
    if(path.includes('.md')){
      console.log(link)
    }else {
      console.log('debes ingresar un .md')
      return false;
    }
  });
})
.catch(console.error);

/* README ejemplos

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);
mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
*/