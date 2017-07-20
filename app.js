var express = require("express");
var mongoose = require("mongoose");

var app = express();

var port = process.env.PORT || 3000;
var username = "";
var password = "";
var connectionString = "mongodb://" + username + ":" + password + "@ds161012.mlab.com:61012/todo-login";

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

mongoose.connect(connectionString);

app.listen(port);