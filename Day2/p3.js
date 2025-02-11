const fs = require('fs');
const newData =  "I am appended at the end of the file";
fs.appendFile("./daat.txt",newData,(err) => {
    if(err)
        console.error(err);
    else
    console.log("Data appended successfully!");
})