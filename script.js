

function hamburgerClick(){

let myNav = document.getElementById("myNav")

// console.log(myNav);

  if(myNav.className === "top-navigation"){
    myNav.className += " responsiveNav"//chaging the class name
  }else{
    myNav.className = "top-navigation"
  }
}