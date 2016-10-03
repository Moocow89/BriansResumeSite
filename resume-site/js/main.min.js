(function() {
    "use strict"

    $(window).scroll(function() {
        //gets top of window
        var scrollTop = $(window).scrollTop();
        //gets position I want animation to start at
        var scrollToSkills = $('#skills-section').offset().top - 250;
        //checks if top of window is at poition I want animationt to start
        if (scrollTop >= scrollToSkills) {
            $(window).off("scroll");
            $(".skill-bar >span").css("animation-play-state", "running");
        }

        if (scrollTop > 71) {
            $(".nav").hide();
        }
        //creates a fixed navbar after scrolling down
        if (scrollTop >= 300) {
            $(".nav").fadeIn("slow");
            $(".nav").attr("style", "position: fixed !important");

        }

    });

    //experience logos info fadeIn and fadeOut
    $(".company-fade-square").mouseenter(function(e) {
        e.preventDefault();
        var target = $(e.target);
        console.log(e);
        target.css("opacity", "1");
        $(".company-header").css("opacity", "1");
        $(".learn-more").css("opacity", "1");
    });


    //show sirius text when click on picture
    $("#sirius-learn-more").click(function(e) {
        e.preventDefault();
        var target = $(e.target);
        $("#sirius-logo").toggleClass("slideLeft");
        $("#sirius-text").toggleClass("fadeIn");
    });

    //show parx text when click on picture
    $("#parx-learn-more").click(function(e) {
        e.preventDefault();
        var target = $(e.target);
        $("#parx-logo").toggleClass("slideRight");
        $("#parx-text").toggleClass("fadeIn");
    });

})();
