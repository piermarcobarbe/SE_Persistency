    doJSONRequest = function (url, method, cb) {
    console.log(method, url);
    const Http = new XMLHttpRequest();

    Http.open(method, url);
    Http.send();



    Http.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            console.log(this);
            if(cb) {
                if (this.responseText){
                    return cb(JSON.parse(this.responseText));
                } else {
                    cb()
                }
            }
            if(this.responseText){
                return JSON.parse(this.responseText);
            }

        }

    }
};


renderUsers = function(usersList){
    var list_tag = document.getElementById("usersList");
    while (list_tag.firstChild) {
        list_tag.removeChild(list_tag.firstChild);
    }

    usersList.forEach(el => {
        console.log(el);
        var li = document.createElement("li");
        li.innerText = el.username + "[" + el.address + "] - BF: " + el.BF;
        list_tag.appendChild(li);
    })


};


deleteUser = function(el){
    username = document.getElementById("user").value;
    url = "/users/" + username;

    console.log("url", url);

    doJSONRequest(url, "DELETE", function () {
        location.reload()
    });

}

search = function(t){
    console.log("Searching")
    if (t === ""){
        getAllUsers()
    } else {
        doJSONRequest("/users/search/" + t, "GET", function (results) {
            console.log(results)
            renderUsers(results);
        })
    }
}


getAllUsers = function(){
    doJSONRequest("/users", "GET", function (text) {
        renderUsers(text)
    })
}

window.onload = function () {

    getAllUsers();

    document.getElementById("search_text").onkeyup = function () {
        search(document.getElementById("search_text").value);
    }
}