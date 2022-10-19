let nav = document.getElementById("nav");




addEventListener("scroll",function () {
  console.log(window.scrollY)
  if (window.scrollY >= 600) {
    nav.classList.add("navScroll")
  }else{
    nav.classList.remove("navScroll")
  }
  
})