const MongoClient = require('mongodb').MongoClient;
// const schemas = require('./schemas');
var db = {};
db.mongoose = require("mongoose");
// db.schemas = schemas;
var dbURL = "mongodb://localhost:27017";
db.users = require("./users")(db);

async function init() {
    await MongoClient.connect(dbURL, { useNewUrlParser : true }).catch((e) => {
        console.log("!! Application cannot connect to MongoDB instance: Connection refused.");
        // console.log(e.message);
        process.exit(1);
    }).then((c) => {
        db.client = c;
    });

    db.db = db.client.db("SE_Persistency");

    db.users.init();



    console.log("=> DB Init successful!");

}


db.init = init;

wipe = async function(){
    await db.db.dropDatabase();
}

db.wipe = wipe;

module.exports = db;