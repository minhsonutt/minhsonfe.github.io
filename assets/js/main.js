
// Fixed nav
window.onscroll = function() {scrollFunction()};
	  function scrollFunction() {
	  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	    document.getElementsByClassName("header")[0].style.padding = "2.2rem 0";
	         document.getElementsByClassName("header__menu-logo")[0].style.fontSize = "2.3rem";
	  } else {
	    document.getElementsByClassName("header")[0].style.padding = "3.7rem 0";
	     document.getElementsByClassName("header__menu-logo")[0].style.fontSize = "2.5rem";

	  }
	}

// Toggle menu
const btnClick = document.getElementsByClassName("header__menu-btn")[0];
btnClick.addEventListener("click", () => {
	var show = document.getElementsByClassName("header__menu-list")[0];
	show.classList.toggle("show");
});


// Back to top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})