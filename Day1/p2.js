const fs = require('fs');
const newData = "i am new data";
fs.writeFileSync('./data.txt',newData);

const data = fs.readFileSync('./data.txt','utf8');
console.log(data)



