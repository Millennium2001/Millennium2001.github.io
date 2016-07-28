$(function () {
  $.getJSON("/members/members.json", function (json) {
    var $image = $("#artist_img");
    var artistName = $("body").attr("data-name");
    $.each(json, function (i, v) {
      if (v.name == artistName) {
        $image.attr("src", "/assets/images/members/" + v.path + ".jpg")
        return true;
      }
    });
  });
});
