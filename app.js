// npm init -y 
//npm install express
//npm install joi

const express = require(`express`);
const app=express();
const port= 3000

const librosRouters= require(`/libros`);
const errorHandler=require(`/errorHandler`);

app.use(express.json());

app.use(`/libros`, librosRouters);





app.listen(port, ()=>{
    console.log(`Servidor iniciado correctamente y en funcionamiento en el puerto: ${port}`);
})
