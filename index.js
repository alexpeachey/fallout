var Fallout = require('./dist/fallout.js');
var repl = require('repl');
var replServer = repl.start({prompt: 'Fallout > '});
replServer.context.Fallout = Fallout;
