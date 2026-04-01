const http = require('http')

const server= http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type', 'text/plain');
    res.end('Hello, world!\n');
});

server.listen(3000,'0.0.0.0', ()=>{
    console.log('server running at http://localhost:3000/');
});