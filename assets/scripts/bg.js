    $(function () {
        var $body = $("body");
        var colorFunc = function (x, y) {
            return 'hsl(' + (Math.floor(Math.abs(y) * 137) + 93) + ',100%,69%)';
        };
        $(window).on("resize", function () {
            var w = $(window).width()
                , h = $(window).height()
            var $canvas = $("#bg");
            $canvas.remove();
            $canvas = $(Trianglify({
                width: w
                , height: h
                , cell_size: 75
                , seed: "if5v6e"
                , x_colors: "YlGnBu"
                , y_colors: "Spectral"
            }).canvas()).attr("id", "bg");
            $body.append($canvas);
        }).trigger("resize");
    });
