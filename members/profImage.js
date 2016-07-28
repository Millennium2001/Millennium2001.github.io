$(function () {
  $.getJSON("//cdn.rawgit.com/SnO2WMaN/MillenniumRecords-Website/master/members/members.json", function (json) {
    var $image = $("#artist_img");
    var artistName = $("body").attr("data-name");
    $.each(json, function (i, v) {
      if (v.name == artistName) {
        $image.attr("src", "//cdn.rawgit.com/SnO2WMaN/MillenniumRecords-Website/master/assets/images/members/" + v.path + ".jpg")
        return true;
      }
    });
  });
});
