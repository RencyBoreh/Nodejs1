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

import http from 'http';
const port=8000;
const name="Rency Boreh"
const server=http.createServer((req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.end(`<h1 style='text-align:center;'>Hello My name is ${name} and This is my server Running at Port ${port}.</h1>`);
});
server.listen(port,()=>{
  console.log(`Server is running at port:${port}`);
  
})




