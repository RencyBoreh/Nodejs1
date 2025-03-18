const { log } = require('console');
const fs = require('fs');
var http=require('http')
const sayHello = require('./greetings')
//Reading a file
// fs.readFile('example.txt', 'utf-8', (err, data) => {
    // if (err) {
        // console.error(err)
        // return;
    // }
    // console.log(data);
// })

//CREATING FILE
// var content='I am Adding This Content To my New File'
// fs.writeFile('newfile.txt',content,(err)=>{
//   if (err) {
//     console.error(err)
//     return;
//   }
//   console.log('File Written Successfully!');
  
// })


// const server=http.createServer((req,res)=>{
//     res.statusCode=200
//     res.setHeader('Content-Type','text/plain')
//     res.end('Hello, World')
// })
//  server.listen(3000,()=>{
//     console.log('Server is running at http://localhost:3000');
    
//  })

//  var myserver=http.createServer((req,res)=>{
//     res.statusCode=200
//     res.setHeader('content-Type','text/plain')
//     res.end("Hello I am Rency")
//  })

//  myserver.listen(5500,()=>{
//     console.log("Hey your server is created");
    
    

//  })

// const message=sayHello('Developers')
// console.log(message);
// const math=require('./math')
// console.log(math.add(2,4));
// console.log(math.subtract(10,5));

 //Streams
 var readableeStream=fs.createReadStream('example.txt',{encoding:'utf-8'})
 readableeStream