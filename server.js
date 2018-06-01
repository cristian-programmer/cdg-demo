const express = require('express')
const next = require('next')


let mysql = require('mysql');
let bodyParse = require('body-parser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();
  server.use(bodyParse.json());
  server.use(bodyParse.urlencoded({extended:true}));
 config = {
    host:"localhost",
    user:"root",
    password: "1234"
  }
   client_sql = mysql.createConnection(config);
   client_sql.connect();
   
   function createDatabasesAndTables(){
      client_sql.query(`create database if not exists categorias`, function(err, result){
        if(err) throw err;
        client_sql.query(`use categorias`, function(err, result){
          if(err) throw err;

          client_sql.query(`create table if not exists catego_prod
           (idprodc int auto_increment, nombre varchar(30))`, function(err, result){
             if(err) throw err;
             console.log(result);
           });
        });
      });
  }

  createDatabasesAndTables();
   

  // Set up home page as a simple render of the page.
  server.get('/', (req, res) => {
    console.log('Render home page')
    return app.render(req, res, '/', req.query)
  })


  server.get('/_data/item', (req, res) => {
    

    client_sql.query('select * from categorias.catego_prod', function(err, resx){
      if (err) throw err;
      console.log(resx);
      res.json(resx)
    });
    
    
  })

  server.post('/addItemx/addI', function(req, res){  
   let cat = req.body.category;

   client_sql.query(`insert into  categorias.catego_prod (nombre) values ("${cat}")`, function(err, result){
      if(err) throw err;
      res.json(cat);
   });
  });


  server.post('/deleteItemx/deleteI', function(req, res){
    let id = req.body.id;

    client_sql.query(`delete from categorias.catego_prod where idprodc ='${id}';`, function(err, result){
      if(err) throw err;
      res.json(result);
    });
  });

  server.post('/updateItemx/updateI', function(req, res){
    let id     = req.body.id;
    let nombre = req.body.nombre;

    client_sql.query(`update categorias.catego_prod set nombre ="${nombre}" where idprodc='${id}'`, function(err, result){
        if(err) throw err;
        res.json(result);
    });
  });
  // Fall-back on other next.js assets.
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

