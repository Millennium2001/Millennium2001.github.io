$(function () {
    var $footer = $("body>footer")
        , $window = $(window)
        , $body = $("body");
    var $title = $("<h1>", {
            text: "Millennium Records"
        })
        , $copyright = $("<h2>", {
            text: "©2016 Millennium Records All Right Reserved."
        })
        , $designed = $("<h2>", {
            text: "Designed By "
        });
    $designed.append($("<a>", {
        text: "SnO2WMaN"
        , href: "sno2wman.github.io"
    }));
    $footer.append($title, $copyright, $designed);
    $window.on("resize", function () {
        var bh = $body.outerHeight(true);
        var fh = $footer.height();
        var wh = $window.height();
        if ($footer.hasClass("fix")) {
            if (bh < wh - fh) {
                $footer.addClass("fix");
            }
            else {
                $footer.removeClass("fix");
            }
        }
        else {
            if (bh < wh) {
                $footer.addClass("fix");
            }
            else {
                $footer.removeClass("fix");
            }
        }
    }).trigger("resize");
});
