const menu = document.getElementsByClassName("menu")[0];
function ToggleNav() {
  menu.classList.toggle("translateXBack");
}

// to add Active class to Active Link
const currentLink = location.href;
const links = document.querySelectorAll("li.link a");
links.forEach((link) => {
   if(link.href === currentLink){
    link.parentElement.classList.add('active')
   }

});

// add sticky class to header on scroll
const nav = document.querySelector("nav");
console.log(nav.offsetTop);
console.log(window.pageYOffset)
window.onscroll = ()=>{
  if(nav.offsetTop<window.pageYOffset){
    nav.classList.add('sticky')
  }else{
    nav.classList.remove('sticky')
  }
}