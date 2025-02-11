const fs = require('fs');
fs.rmdir("mydir",(e) => {

    if(e)
    {
        console.error("Error eleting Directory: ",e);
        return;
    }
console.log("Directory deleted successfully!");
});