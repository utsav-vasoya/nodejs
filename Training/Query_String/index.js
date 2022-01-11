var querystring = require('querystring');
var string_parse = querystring.parse('year=2017&month=february');
console.log(string_parse);

const parse_to_string = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }, ',', ':');
console.log("JSON To String: "+parse_to_string);

const string_to_parse = querystring.parse('foo[]=1&foo[]=2&foo[]=3');
console.log(string_to_parse);

const parsetostring = querystring.stringify({ foo: [1, 2, 3] })
console.log("JSON TO Sting: "+parsetostring);
