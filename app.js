//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const sobreMim = "";
const escolaridade = "";
const experiencias = "";
const cursos = "";
const contato = "";


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/", function(request, response){
  response.render("sobreMim", {
    sobreMim: sobreMim,
    posts: posts
    });

});

app.get("/escolaridade", function(request, response){
  response.render("Escolaridade", {escolaridade: escolaridade});
});

app.get("/experiencias", function(request, response){
  response.render("experiencias", {experiencias: experiencias});
});

app.get("/cursos", function(request, response){
  response.render("Cursos", {cursos: cursos});
});

app.get("/contato", function(request, response){
  response.render("contato", {contato: contato});
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
