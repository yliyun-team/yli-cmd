var fis = module.exports = require('fis');
fis.require.prefixes = ['yli', 'qycloud', 'fis'];
fis.cli.name = "yli";
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

var defaultConfig = require('./configs/default.js');
fis.config.merge(defaultConfig);