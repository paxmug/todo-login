var express = require("express");
var mongoose = require("mongoose");
var setUpController = require("./controllers/setUpController");
var apiController = require("./controllers/apiController");

var app = express();

var port = process.env.PORT || 3000;
var username = process.env.mongoDBUsername;
var password = process.env.mongoDBPassword;

var connectionString = "mongodb://" + username + ":" + password + "@ds161012.mlab.com:61012/todo-login";

app.use("/", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

mongoose.connect(connectionString);

setUpController(app);
apiController(app);

app.listen(port);