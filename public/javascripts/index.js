doJSONRequest = function (url, method, cb) {
    const Http = new XMLHttpRequest();

    Http.open(method, url);
    Http.send();

    Http.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            console.log(this);
            cb(JSON.parse(this.responseText))

        }

    }
};


renderUsers = function(usersList){
    var list_tag = document.getElementById("usersList");
    while (list_tag.firstChild) {
        list_tag.removeChild(list_tag.firstChild);
    }

    usersList.forEach(el => {
        var li = document.createElement("li");
        li.innerText = el.username + " - " + el.BF;
        list_tag.appendChild(li);
    })


};



window.onload = function () {
    doJSONRequest("/users", "GET", function (text) {
        // alert(text)
        renderUsers(text)
    })
}