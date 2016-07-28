$(function () {
  $.getJSON("/members/members.json", function (json) {
    var $list = $("#contact>ul");
    var artistName = $("body").attr("data-name");
    $.each(json, function (i, v) {
      if (v.name == artistName) {
        var links = v.contact;
        for (var link in links) {
          var href = links[link];
          var $container = $("<li>").addClass(link);
          var $icon = $("<webicon>", {
            icon: "fa:" + link
          });
          var $attr = $("<a>", {
            target: "_blank"
            , href: href
            , class: "fill_link"
          });
          $container.append($icon, $attr);
          $list.append($container);
        }
        return true;
      }
    });
  });
});
