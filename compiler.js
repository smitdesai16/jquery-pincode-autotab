const fs = require('fs-extra')
const sass = require('node-sass');
var uglifyJS = require("uglify-js");

//dist\css\jquery-pincode-autotab.min.css
sass.render({
	file: 'src/sass/jquery-pincode-autotab.scss',
	outputStyle: 'compressed'
}, function(error, result) {
	if (error) {
		console.log(error);
	} else {
		fs.outputFile('dist/css/jquery-pincode-autotab.min.css', result.css.toString());
	}
});

//dist\css\jquery-pincode-autotab.css
sass.render({
	file: 'src/sass/jquery-pincode-autotab.scss'
}, function(error, result) {
	if (error) {
		console.log(error);
	} else {
		fs.outputFile('dist/css/jquery-pincode-autotab.css', result.css.toString());
	}
});

//dist\js\jquery-pincode-autotab.min.js
fs.readFile('src/js/jquery-pincode-autotab.js', function(error, data) {
	if (error) {
		console.log(error);
	}
	var result = uglifyJS.minify(data.toString())
	fs.outputFile('dist/js/jquery-pincode-autotab.min.js', result.code, function(error) {
		if (error) {
			console.log(error);
		}
	})
})

//dist\js\jquery-pincode-autotab.js
fs.copy('src/js/jquery-pincode-autotab.js', 'dist/js/jquery-pincode-autotab.js')
	.then()
	.catch( error => console.log(error));