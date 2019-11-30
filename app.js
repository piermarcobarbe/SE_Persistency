var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require("./db_gateway");
var users_router = require("./routes/users")(db);

db.init()
// db.users.insertUser("ciao", "we").then(console.log("done"))



var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter)(db);
app.use("/users", users_router)

module.exports = app;
