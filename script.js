
// SIDEBAR MOBILE 

// function openNav() {
//     document.getElementById("collapseNavToggler").style.width = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("collapseNavToggler").style.width = "0";
//   }

// Aktif Toggle Class change silang

$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        this.classList.toggle("change");
    });
});

// $(window).resize(function() {
//   if ($(window).width() < 850) {
//     if($('.navbar-toggler').hasClass('change')){
//       $(this).removeClass('change');
//   }
// });

// Kedua

// $(document).click(function(event) {
//   if ($(event.target).closest(".navbar-nav").length ||  $(".navbar-collapse.show").length) {
//     $(".navbar-collapse.show").collapse("hide") && $('.change').removeClass('change');
//   }

// });

$(document).click(function (e) {

  let container = $(".navbar-nav");
if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0 // ... nor a descendant of the container
      && event.target.class !== "collapse")  // for the functionality of main toggle button
  {
    $('.navbar-toggler').classList.toggle('change') 
    // && $(".navbar-collapse.show").collapse("hide");
  } 
  // if (container.hasClass('change')){
  //   $(this).removeClass('change');
  // };

});




// Navbar Active

// Add active class to the current button (highlight it)
var header = document.getElementById("navCollapse");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Move Progress Bar

// let i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     let elem = document.getElementById("progressBar");
//     let width = 0;
//     let id = setInterval(frame, 15);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//         elem.innerHTML = width  + "%";
//       }
//     }
//   }
// }

// About - Step 
// $('.step').each(function () {
//   $(this).prop('Counter',0).animate({
//       Counter: $(this).text()
//   }, {
//       duration: 4000,
//       easing: 'swing',
//       step: function (now) {
//           $(this).text(Math.ceil(now));
//       }
//   });
