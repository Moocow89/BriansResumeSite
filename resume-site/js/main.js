(function() {
    "use strict"

    $(document).ready(function() {

        var view = {
            displayPage: fucntion() {
                $(".nav-item").click(function() {
                    var target = $(this).attr("href");

                    $(target).toggle(style("display", ))
                })
            },
            displaySlideOut: function() {
                $(".slideInfo-block").addClass("displayNone");
                $(".slideInfo-link").click(function() {
                    var target = $(this).attr('href');
                    $(target).slideToggle("slow");
                });
            }
        };

        view.displaySlideOut();
    });

})();
