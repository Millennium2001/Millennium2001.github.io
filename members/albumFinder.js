$(function () {
    $.getJSON("/albums/albums.json", function (json) {
        var $list = $("#albums>ul");
        var artistName = $("body").attr("data-name");
        for (var i = 0; i < json.length; i++) {
            var album = json[json.length - 1 - i];
            var artist = album.artist;
            if (artist.indexOf(artistName) != -1 || artist.indexOf("Millennium Records") != -1) {
                var name = album.name;
                var src = "/assets/images/albums/" + album.src + ".jpg";
                var link = "/albums/" + album.href + "/index.html";
                var $container = $("<li>");
                var $img = $("<img>", {
                        src: src
                    })
                    , $flip = $("<div>")
                    , $name = $("<h1>", {
                        text: name
                    })
                    , $artist = $("<h2>", {
                        text: artist
                    })
                    , $genre = $("<h2>", {
                        text: album.genre
                    })
                    , $link = $("<a>", {
                        href: link
                        , class: "fill_link"
                    });
                $container.append($img, $flip.append($name, $artist, $genre), $link);
                $list.append($container);
            }
        };
    });
});
