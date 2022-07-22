$(document).ready(function () {
  $(".carouselResultados").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "15%",
          slidesToShow: 1,
        },
      },
    ],
  });
});
