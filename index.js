#!/usr/bin/env node
console.log('hola')
console.log(process.argv)
const path = process.argv[2].toString();
const mdLinks = require('./mdLinks.js')

mdLinks.mdLinks(path, 'utf-8')

.then((links) => {
  links.forEach(function (link) {
    console.log(link)
  });
})
.catch(console.error);

/* .then((links) => {

  links.forEach(function (link) {
    if (path.includes('.md')) {
      console.log(link);
    } else {
        console.log('debes ingresar un .md')
        return false;
    }
})
}) */



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