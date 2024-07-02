// Navbar
// Show and Hide the navbar *partially*
$(".bars").on("click", function () {
  $("nav").animate({ width: "150px" }, 500);
  $(".bars").removeClass("d-block").addClass("d-none");
  $(".close").removeClass("d-none").addClass("d-block");
});

$(".close").on("click", function () {
  $("nav").animate({ width: "38px" }, 500);
  $(".close").removeClass("d-block").addClass("d-none");
  $(".bars").removeClass("d-none").addClass("d-block");
});

// Scroll to section
$(".nav-item").on("click", function () {
  let sectionId = $(this).attr("href");
  let sectionOffset = $(sectionId).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset }, 500);
});

// Show and Hide the item content
$(".singer").on("click", function () {
  $(".item-content").not($(this).next()).slideUp(1000);
  $(this).next().slideToggle(1000);
});

// Event Countdown
let today = new Date();
let eventDate = new Date(2024, 9, 25);
let countdown = eventDate - today;
let seconds = Math.floor(countdown / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let months = Math.floor(days / 30);
let years = Math.floor(months / 12);

setInterval(() => {
  countdown -= 1000;
  seconds = Math.floor(countdown / 1000);
  minutes = Math.floor(seconds / 60);
  hours = Math.floor(minutes / 60);
  days = Math.floor(hours / 24);
  months = Math.floor(days / 30);

  $("#month").text((months % 12) + " M");
  $("#day").text((days % 30) + " D");
  $("#hour").text((hours % 24) + " h");
  $("#minute").text((minutes % 60) + " M");
  $("#second").text((seconds % 60) + " S");
}, 1000);

// Typing Counter
$(".typing-watch").on("keyup", function () {
  $(".typing-counter").text(100 - $(this).val().length);
});

// Set the maximum length of the input field to 100 characters
$(".typing-watch").attr("maxlength", 100); // yes it should be done via html by adding ==> (maxlength="100") but... why not ¯\_(ツ)_/¯
