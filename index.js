document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("nav");
    var sticky = navbar.offsetTop;
  
    function handleScroll() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
  });
  

// window.onscroll = function () {
//   myFunction();
// };

// var navbar = document.getElementById("area");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// document.addEventListener("DOMContentLoaded", function() {
//    var headerNavArea = document.getElementById("area");

//    // Add event listener for mouseenter
//    headerNavArea.addEventListener("mouseenter", function() {
//     //   this.style.height = "200px"; // Adjust the height to expand to on hover
//    });

//    // Add event listener for mouseleave
//    headerNavArea.addEventListener("mouseleave", function() {
//     //   this.style.height = "60px"; // Adjust the original height on mouseleave
//    });
// });
new WOW().init();