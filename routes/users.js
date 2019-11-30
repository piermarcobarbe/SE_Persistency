var express = require('express');

module.exports = function (db){

    var router = express.Router();

    router.get("/search/:param", async function(req, res, next) {
        console.log(req.params.param);

        var r = await db.users.find_user(req.params.param)
        console.log("R", r);
        res.send(r);
    });

    router.get("/",async function (req, res, next) {

        users = await db.users.get_users()
        console.log(users)
        res.send(users)

    });


    router.post("/", function (req, res, next) {

        console.log(req.body);

        if(req.body.BF){

            var r = db.users.set_user_bf(req.body.username, req.body.BF);
            console.log(r)


        } else {
            var r = db.users.insert_user(req.body.username, req.body.address);

            console.log(r);


        }

        res.redirect("/")


    });
    
    router.delete("/:username", async function (req, res, next) {
        console.log("DELETE");
        console.log(req.params.username);
        var r = await db.users.delete_user(req.params.username);
        console.log(r);
        res.end()
    })

    return router;
}
