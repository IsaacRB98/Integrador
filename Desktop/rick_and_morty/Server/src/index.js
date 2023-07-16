//Con EXPRESS
const express = require('express');
const {conn} = require('./DB_connection');
const server = express();
const router = require('./routes/index');
const PUERTO = 3001;

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json());
server.use('/rickandmorty', router)

conn.sync({force: false}).then(()=>{

  server.listen(PUERTO, () => {
      console.log('Server raised in port:' + `${PUERTO}`);
  })
}).catch((error)=>{
  console.log(error);
})





//Sin EXPRESS
/*
const http = require('http');
const PORT = 3001;
const getCharById = require('./controllers/getCharById')*/

/*http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    const {url} = req
    if(url.includes("/rickandmorty/character")){
        const id = Number(url.split('/').pop())
       /* const character= characters.find((char)=>{
            return char.id === id
        })*/
        
      //  getCharById(res, id);

       /* res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(character))*/
    /*}
}).listen(PORT, 'localhost')*/

//Ivan

 /*http
     .createServer((req, res) => {
         res.setHeader('Access-Control-Allow-Origin', '*');
         const { url } = req;

         if (url.includes("/rickandmorty/character")) {
             const id = url.split('/').pop()
             getCharById(res, id)
         }

     })
    .listen(PORT, 'localhost')*/


    //Felix

 /*   http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      const id = Number(url.split("/").at(-1));
      getCharById(res, id);
    } else {
      res.writeHead(403, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  })
  .listen(PORT, "localhost", null, () => {
    console.log(`Listening on port: ${PORT}`);
  });
*/