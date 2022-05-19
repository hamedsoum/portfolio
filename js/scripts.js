$(document).ready(function(){
    $(window).scroll(function(){
         /*ajoute la classe sticky à lelement navbar lorsque le scroll vers le bas est > 20   */
        if(this.scrollY >5){
            $('.navBar').addClass("sticky");
                 /*supprimer la classe sticky à lelement navbar lorsque le scroll vers le bas est < 20   */
        }else{
            $('.navBar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide to up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop : 0})
    });

    $('nav li a').on('click', function(){
        //add class active on new links
        $('.navBar .menu').toggleClass("active");
        $('.menu-icon i ').toggleClass("active");
    })
    //texte animation

    var typed = new Typed(".typing", {
        strings : ["gestion de projet web", "application mobile", "conception graphique"],
        typeSpeed : 50,
        backSpeed : 60,
        loop : true
    })

    //affichage du menu responsive
    $('.menu-icon').click(function(){
        $('.navBar .menu').toggleClass("active");
        $('.menu-icon i ').toggleClass("active");

    });

   // carousel script

   $('.carousel').owlCarousel({
        margin: 20,
        loop : true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items : 1,
                nav : false
            },
            600: {
                items : 2,
                nav : false
            },
            1000: {
                items : 3,
                nav : false
            }
        }
   });

});

