let totalItems = $('.carousel-item').length;
let currentIndex = $('.carousel-item.active').index() + 1;
let myCarousel = document.getElementById('carouselExampleIndicators')
myCarousel.addEventListener('slid.bs.carousel', function() {
  currentIndex = $('.carousel-item.active').index() + 1;
  $('#slide').text('' + currentIndex + ' / ' + totalItems + '');
});



