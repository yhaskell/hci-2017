var path = require('path')

var projectPath = path.resolve(__dirname + '/../')
var distributionPath = path.resolve(projectPath + '/dist')
var appSource = path.resolve(projectPath + '/src/index.tsx')
var templateSource = path.resolve(projectPath + '/src/index.html')

module.exports = {
    projectPath,
    distributionPath,
    appSource,
    templateSource
}
