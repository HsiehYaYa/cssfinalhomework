$(document).ready(function(){
    $('.product').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.product').toggleClass('active');
        $('.product-list').slideToggle();
      });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed:1000,
        effect:'fade',
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
      
    lightbox.option({
        'resizeDuration': 1000,
        'wrapAround': true
      });

    $('.upicon').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},1000);
      });
});