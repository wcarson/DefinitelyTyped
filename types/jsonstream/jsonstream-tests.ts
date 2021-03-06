
import json = require('jsonstream');

var read: NodeJS.ReadableStream;
var write: NodeJS.WritableStream;

read = read.pipe(json.parse('*'));
read = read.pipe(json.parse(['foo/*', 'bar/*']));

read = json.stringify();
read = json.stringify(false);
read = json.stringify('{', ',', '}');

read = json.stringifyObject();
read = json.stringifyObject('{', ',', '}');
