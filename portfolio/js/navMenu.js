function hamburguerMenuxx() {
  if (document.getElementById("contentMenu").style.width = "100%"){
    closeOpenNav(0);
  } else {
    closeOpenNav(1);
  }
  console.log("oi")
  }

function closeOpenNav(x) {
  if (x == 1){
    document.getElementById("contentMenu").style.width = "100%";  
    x = 0;
  }
  else{
    document.getElementById("contentMenu").style.width = "100%";
    x = 1;
  }
  return x;
  
}



// var menu = document.getElementById("iconMenu");

// menu.addEventListener("click", closeOpenNav);