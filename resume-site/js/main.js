(function() {
    "use strict"

    $(document).ready(function() {

        var view = {
            displayPage: function() {
                var mainSectionArray = $("section.main-section");
                $(".nav-item").click(function(e) {
                    for (var i = 0; i < mainSectionArray.length; i++) {
                        if (!$(mainSectionArray[i]).hasClass("displayNone")) {
                            $(mainSectionArray[i]).addClass("displayNone");
                        }
                    }
                    var target = $(e.target).attr("href");
                    $(target).removeClass("displayNone");

                });
            },
            displaySlideOut: function() {
                $(".slideInfo-block").addClass("displayNone");
                $(".slideInfo-link").click(function(e) {
                    var target = $(e.target).attr('href');
                    $(target).slideToggle("slow");
                });
            }
        };

        view.displaySlideOut();
        view.displayPage();
    });

})();
