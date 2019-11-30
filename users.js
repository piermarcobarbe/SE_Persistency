module.exports = function (db) {

    var users = {};
    function init() {
        users.usersCollection = db.db.collection("users");
    }
    users.init = init;

    async function getUser(str) {
        let res = await users.usersCollection.findOne({ "username" : str });
        return res;
    }

    users.getUser = getUser;

    async function insert_user(u, address) {

        res = await users.usersCollection.insertOne(
            {
                "username" : u,
                "BF" : "",
                "address": address
            });
        if(res.ops[0]) return res.ops[0];
        return null;

    }

    users.insert_user= insert_user;


    async function set_user_bf(user, bf) {
        console.log(user, bf);

        let res = await users.usersCollection.findOneAndUpdate({"username" : user}, { $set : { "BF" : bf }});
        return res;

    }

    users.set_user_bf = set_user_bf;


    async function get_users() {
        return users.usersCollection.find().toArray();
    }

    users.get_users = get_users;

    async function delete_user(user) {
        return users.usersCollection.findOneAndDelete({"username" : user});
    }

    users.delete_user = delete_user;


    async function find_user(param){
        var r = await users.usersCollection.find({}).toArray();
        var ret_users = []
        r.forEach(u => {
            if(u.username.includes(param) || u.address.includes(param)) ret_users.push(u)
        })

        return ret_users;

    }

    users.find_user = find_user;

    return users;
};