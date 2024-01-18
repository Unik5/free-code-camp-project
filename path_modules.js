const path = require('path');
console.log(path.sep);

const filepath = path.join('subfolder','test_for_path.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absoultepath = path.resolve(__dirname,'subfolder','test_for_path.txt');
console.log(absoultepath);