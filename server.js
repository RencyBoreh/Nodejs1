// import http from 'http';
// const PORT=8000;
// const server=http.createServer((req,res)=>{
//   res.setHeader('content-Type','text/html')
//   // res.write("Hello World");
//   res.end('<h1>Hello Rency</h1>')
// })

// server.listen(PORT,()=>{
//   console.log(`Server Running on Port:${PORT}`);
  
// })
import fs from 'fs/promises';
import { error } from 'console';
import http from 'http';
const port=8000;
// const name="Jerop"
const server=http.createServer((req,res)=>{
  try {
    //checking for GET method
    if (req.method==='GET') {
      if (req.url==='/') {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`<h1 style='text-align:center;'>Home Page.</h1>`);
      }
      else if (req.url==='/about') {
        res.writeHead(200,{'Content-Type':'text/html'});
      res.end(`<h1 style='text-align:center;'>Hello this is About Page.</h1>`);
      }
      else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end(`<h1 style='text-align:center;'>Page Not Found.</h1>`);
      }
    }
    else{
      throw new error('Method Not Allowed!!')
    }
  } catch (error) {
    res.writeHead(500,{'Content-Type':'text/html'});
    res.end(`<h1 style='text-align:center;'>Server Error.</h1>`);
  }
 
 
 
  
  
});
server.listen(port,()=>{
  console.log(`Server is running at port:${port}`);
  
})




