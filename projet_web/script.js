const pages_names = ["huba", "contact"];

let links = "";

for (let i = 0 ; i < pages_names.length; i++){
    links +=`<button id='${pages_names[i]}'> ${pages_names[i]}</button>` + '<br>';
}

function load_navbar(){

    document.getElementById('navbar').innerHTML=links;
}
document.addEventListener("DOMContentLoaded", function () {
    load_navbar();
    document.getElementById(document.title).style.display = "none";
});