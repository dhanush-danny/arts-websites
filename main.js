var photos = ["dummy.jfif", "download.jfif", "images.jfif"];
var i = 0;
function nextimg() {
    document.getElementById("img_home").style.width = "50%";
    document.getElementById("img_home").style.height = "50%";
    document.getElementById("img_home").src = photos[i];
    i++;
    if (i > 2) {
        i = 0
    }
    if (i == 2) {
        document.getElementById("img_home").style.height = "420px";
    }
    if (i == 0) {
        document.getElementById("img_home").style.height = "420px";
    }
}

var photos_p = ["images.jfif", "download.jfif", "dummy.jfif"];
var k = 0;
function previousimg() {
    document.getElementById("img_home").style.width = "50%";
    document.getElementById("img_home").style.height = "50%";
    document.getElementById("img_home").src = photos_p[k];
    k++;
    if (k > 2) {
        k = 0
    }
    if (k == 1) {
        document.getElementById("img_home").style.height = "420px";
    }
    if (k == 3) {
        document.getElementById("img_home").style.height = "420px";
    }
    if (k == 2) {
        document.getElementById("img_home").style.height = "420px";
    }
}