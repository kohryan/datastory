$(document).ready(function () {
  $(document).on("click", '#menuToggle a[href^="#"]', function (a) {
    a.preventDefault(),
      $("#menuToggle").removeClass("active"),
      $("html, body").animate(
        { scrollTop: $($.attr(this, "href")).offset().top },
        500
      );
  }),
  $(document).on("click", ".menuToggle-nav", function () {
    $("#menuToggle").toggleClass("active");
  }),
  $("main").click(function () {
    $("#menuToggle.active").removeClass("active"), $("body").off("click");
  });
})

let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}