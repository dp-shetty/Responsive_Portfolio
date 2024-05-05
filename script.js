
let trigram = document.getElementById("trigram")

function hamburgerClick(){

let myNav = document.getElementById("myNav")

// console.log(myNav);

  if(myNav.className === "top-navigation"){
    console.log(trigram);
    myNav.className += " responsiveNav"//chaging the class name
    trigram.innerHTML="&#128938;"
  }else{
    myNav.className = "top-navigation"
    trigram.innerHTML="&#9776;"
    console.log(trigram);
  }
}