$(document).ready(function(){


    // navbar toggle
    $('.navbar-toggler').on('click', function(){

        $('nav .one').toggleClass('top');
        $('nav .two').toggleClass('hidden');
        $('nav .three').toggleClass('bottom');

    })

    //Mix It UP
    var mixer = mixitup('.gallery');
    //venobox
    $(document).ready(function(){
        $('.venobox').venobox(); 
      });


    

    $('nav li a').on('click', function(){
        //add class active on new links
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')

        //smooth scroll
        $('html,body').animate({
            scrollTop : $('#' + $(this).data('scroll')).offset().top
        })

        $('.navBar .menu').toggleClass("desactive")

    })

     //add class active on new portfolio
     $('section .portfolio li a').on('click', function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
        
     })

    //button up

    $(window).scroll(function(){
        if ($(this).scrollTop()>=600) {
            $('.up').fadeIn(1000)
        } else {
            $('.up').fadeOut(1000)
        }
    })
    $('.up').on('click', function(){
        $('html,body').animate({
            scrollTop : 0
        })
    })

})