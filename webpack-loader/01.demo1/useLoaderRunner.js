const { runLoaders } = require('loader-runner')
const path = require('path');
const fs = require('fs');

runLoaders({
	resource: path.resolve(__dirname, './src/hello.ejs'),
	loaders: ['raw-loader'],
	readResource: fs.readFile.bind(fs)
}, (err, result) => {
	console.log(result.result[0])
})


