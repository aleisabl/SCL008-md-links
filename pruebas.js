const FileHound = require('filehound');

const files = FileHound.create()
  .paths('./pruebas')
  .ext('md')
  .find();

files.then(console.log);