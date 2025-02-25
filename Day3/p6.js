const http =require('http');
const server = http.createServer(async(req,res)=>{
    const data = await fetch("http://dummyjson.com/products");
    res.statusCode = 200;
    res.setHeader('content-type','application/json');
    const newproducts = await data.json();
    const myproduct = newproducts.products;
    const title = myproduct.map(product =>{
        return product.title;
    });
    res.end(JSON.stringify(newproducts));
});
server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else
    console.log("Server is running on port 9000");
})