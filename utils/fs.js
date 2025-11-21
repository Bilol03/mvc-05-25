const fs = require('fs')
const path = require('path')


function readFile(fileName){
    let data = fs.readFileSync(path.join(process.cwd(), 'database', fileName))
    data = data ? JSON.parse(data) : []
    return data
}
function writeFile(fileName, data){
    fs.writeFileSync(path.join(process.cwd(), 'database', fileName), JSON.stringify(data, null, 4))
    return true
}

module.exports = {
    readFile, 
    writeFile
}