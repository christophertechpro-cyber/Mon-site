const nav = document.querySelector("nav");
const event = document.querySelector("#event")



window.addEventListener("scroll", () => {
  if (window.scrollY > 99) {
    nav.classList.add("navevente")
}  else {
    nav.classList.remove("navevente") 
  }
});


window.addEventListener("scroll", () => {
  if (window.scrollY > 490) {
   event.style.transform = "none"
   event.style.opacity = 1

}  else {
    
  }
});

