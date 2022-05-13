// typing animation

var typed = new Typed('.typing',{
    strings:["","Web Designer", 'Web Developer', "Graphics Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})




const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
    // Get current scroll position
    let scrollY = window.pageYOffset;
    
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;

      sectionId = current.getAttribute("id");

      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ){
        document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document.querySelector(".nav a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  }


  
/* Adding an event listener to the hamburger menu. When the hamburger menu is clicked, it will toggle
the class of outside. */

 const ham= document.querySelector('.nav-toggler')
 ham.addEventListener('click',()=>{
    document.querySelector('#menu').classList.toggle('outside');
    ham.classList.toggle('open')
 })

