const pages_names = ["hub", "contact","a"];
const links_names = ["index","contact","a"]

let links = "";

for (let i = 0 ; i < pages_names.length; i++){
    links +=`<button id='${pages_names[i]}'><a href="${links_names[i]}"> ${pages_names[i]}</a></button>` ;
}

function load_navbar(){

    document.getElementById('navbar').innerHTML=links;
}
document.addEventListener("DOMContentLoaded", function () {
    load_navbar();
    document.getElementById(document.title).style.display = "none";
});