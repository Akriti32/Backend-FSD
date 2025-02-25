const http = require('http');
const fs= require('fs/promises');

const server= http.createServer(async(req,res) => {
    res.setHeader('Content-Type','application/json');
    res.writeHead(200);
    if(req.url=='/getdata' && req.method==='GET')
        {
            const data= await fs.readFile('./data.json');
            res.end(JSON.stringify(data));
        }
        else if(req.url==='/setdata' && req.method==='POST')
        {
            let body='';
            req.on('data',chunk => {
                body += chunk;

            })
            req.on('end',async () => {
                const newData = JSON.parse(body);
                let users = [];
                try{
                    users = JSON.parse(await fs.readFile('./data.json'));
                    const newid=users.length>0?users[users.length-1].id+1:1;
                    newData.id = newid;
                    users.push(newData);
                }
                catch(e){}
            });
        }
    
});
server.listen(9000,() => {
    console.log('Server running on port 9000');
})