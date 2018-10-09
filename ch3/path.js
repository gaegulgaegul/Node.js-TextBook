const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimeiter', path.delimiter);
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename():', path.basename(string, path.extname(string)));
console.log('------------------------------');
console.log('path.parse():', path.parse(string));
console.log('path.format():', path.format({
    dir: 'c:\\dev_tms\\git\\node\\ch3',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():', path.normalize('c://dev_tms\\\\git\\\\node\\\\ch3\\\path.js'));
console.log('------------------------------');
console.log('path.isAbsolute():', path.isAbsolute('c:\\'));
console.log('path.isAbsolute():', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative():', path.relative('c:\\dev_tms\\git\\node\\ch3\\path.js', 'c:\\'));
console.log('path.join():', path.join(__dirname, '..', '..', 'node', '.', '/ch3'));
console.log('path.resolve():', path.resolve(__dirname, '..', 'node', '.', '/ch3'));