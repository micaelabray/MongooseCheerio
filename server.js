// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Express
var app = express();

// Port
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended:true })); //parse request body as JSON
app.use(express.json());
app.use(express.static("public")); //make public a static folder
