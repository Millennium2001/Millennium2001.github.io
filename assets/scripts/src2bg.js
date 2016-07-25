$(function () {
    $(".src2bg").each(function () {
        var $self = $(this);
        var src = $self.attr("src");
        $self.removeAttr("src").css("background", "url(" + src + ")");
    });
});
