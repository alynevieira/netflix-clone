'use strict'

var passId = function(id) {
    localStorage.setItem("id_detail", id);

    let path =  window.location.href;
    
    if(path.substr(-10) === "index.html" || path.substr(-5) === "index") {
        window.location.href = "pages/detail.html";
    } else {
        window.location.href = "../pages/detail.html";
    }
}