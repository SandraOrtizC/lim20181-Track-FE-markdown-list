#!/usr/bin/env node
const mdlinks = require('./index');
const program = require('commander');
let options = {
	validate: false,
	stats: false
}
program
	.arguments('<path>')
	.option('-v, --validate', 'check validate link')
	.option('-s, --stats', 'Information link')
	.action((route) => {
		mdlinks(route, options).then(data => {
			console.log(data);

		})
	})
.parse(process.argv);
