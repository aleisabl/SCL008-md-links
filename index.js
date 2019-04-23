#!/usr/bin/env node

const path = process.argv[2];
const mdLinks = require('./mdLinks.js')

mdLinks.mdLinks(path)

.then((links) => {
  links.forEach(function (link) {
      console.log(link)
  });
})

/* .then(onFulfilled, onRejected);
function onFulfilled(links){
  links.forEach(function (link) {
      console.log(link)
  })
}
function onRejected(err) {
  console.log('Cannot read the file.');
  return false;
}; */

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