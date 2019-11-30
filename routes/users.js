var express = require('express');

module.exports = function (db){

    var router = express.Router();

    router.get("/",async function (req, res, next) {

        users = await db.users.get_users()
        console.log(users)
        res.send(users)

    })

    /* GET users listing. */
    router.get('/:id', function(req, res, next) {

        console.log(req.params.id)
        res.end()

    });

    router.post("/", function (req, res, next) {

        console.log(req.body);

        if(req.body.BF){

            var r = db.users.set_user_bf(req.body.username, req.body.BF);
            console.log(r)


        } else {
            var r = db.users.insert_user(req.body.username);

            console.log(r);


        }

        res.redirect("/")


    })

    return router;
}
