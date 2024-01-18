const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./subfolder/first.txt','utf8');
const second = readFileSync('./subfolder/second.txt','utf8')

console.log(first , second);

writeFileSync(
    './subfolder/write.txt',`This is the result: ${first}, ${second}`,{flag :'a'}
)