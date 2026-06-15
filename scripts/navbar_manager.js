const pages_names = ["hub", "contact", "youtube","To Do list"];
const links_names = [" ","contact", "youtube","To-Do-list"]

let links ="<summary aria-label='Menu'>☰</summary><nav id='navbar'>";

for (let i = 0 ; i < pages_names.length; i++){
    links +=`<button id='${pages_names[i]}'><a href="${links_names[i]}"> ${pages_names[i]}</a></button>` ;
}

links += "</nav>";

function load_navbar(){

    document.getElementById('nav-drop').innerHTML = links;
}
document.addEventListener("DOMContentLoaded", function () {
    load_navbar();
    document.getElementById(document.title).style.display = "none";
});