const path = require('path')

console.log(path.resolve('teste.pdf'))

const midFolder = "relatorios"
const fileName = "pietro.txt"

const finalPath = path.join("/" , 'arquivos', midFolder, fileName)