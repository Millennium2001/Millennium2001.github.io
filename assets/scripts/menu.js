$(function () {
    var $window = $(window)
        , $body = $("body")
        , $menu = $("#menu")
        , $items = $("<ul>");
    var items = [{
        title: "HOME"
        , href: "/index.html"
    }, {
        title: "ALBUMS"
        , href: "/albums/index.html"
    }, {
        title: "MEMBERS"
        , href: "/members/index.html"
    }, {
        title: "CONTACT"
        , href: "/contact.html"
    }];
    for (var item in items) {
        mkItem($items, items[item]);
    }

    function mkItem(root, object, index) {
        var $root = $(root);
        var $item = $("<li>").css("transition-delay", index * 0.05 + "s");
        var $title = $("<h1>", {
            text: object.title
        });
        var $link = $("<a>", {
            href: object.href
            , class: "fill_link"
        });
        var $childrenBox = $("<ul>");
        $.each(object.children, function (index, c) {
            mkItem($childrenBox, c, index);
        })
        $root.append($item.append($link, $title, $childrenBox));
    }
    $menu.append($items);
    if (!$menu.hasClass("nofix")) {
        var firstTop = $menu.offset().top
            , menuH = $menu.height();
        $window.on("scroll", function () {
            var scr = $(this).scrollTop();
            if (firstTop <= scr) {
                $menu.addClass("sticky");
                $body.css("margin-top", menuH);
            }
            else {
                $menu.removeClass("sticky");
                $body.css("margin-top", 0);
            }
        }).trigger("scroll");
    }
});
