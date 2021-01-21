$(document).ready(function (){
   $(window).on('scroll', function(){
       var scroll = $(window).scrollTop();
       if(scroll >=50){
           $(".sticky").addClass("stickyadd");
        }
        else {
            $(".sticky").removeClass("stickyadd");
        }
   }) 

   var typed = new Typed(".element", {
       strings: ["John Doe", "a Developer", "a Designer", "a Workaholic"],
       smartBackspace: true,
       typeSpeed: 200,
       backSpeed: 100,
       loop: true,
       loopCount: Infinity,
       startDelay: 1000
   });


   // Progress bars

   var waypoint = new Waypoint({
  element: document.getElementsByClassName('exp-class'),
  handler: function() {
    var p = document.querySelectorAll('.progress-bar');
   p[0].setAttribute("style", "width:99%; transition:1s all");
   p[1].setAttribute("style", "width:93%; transition:1.5s all");
   p[2].setAttribute("style", "width:85%; transition:1.7s all");
   p[3].setAttribute("style", "width:80%; transition:2s all");
   p[4].setAttribute("style", "width:98%; transition:2.2s all");
   p[5].setAttribute("style", "width:77%; transition:2.5s all");
  },
  offset:'90%'
    })

    //Testimonials

    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true, 
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.item-box').show('1000');
        }
        else {
            $('.item-box').not('.'+value).hide('1000');
            $('.item-box').filter('.'+value).show('1000');
        }
    })
    
    //Add active class on selected item

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active'); 
    })

});

    window.addEventListener('scroll', function(){
        var scroll = document.querySelector('#top');
        scroll.classList.toggle("active", window.scrollY > 500)
    });

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior:"smooth",
        })
    }
