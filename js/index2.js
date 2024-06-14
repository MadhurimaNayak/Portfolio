$(document).ready(function () {
    var $righttoleft = $(".right-to-left");
    var $desc = $righttoleft.find("ul.desc");
    var $cloneddesc = $desc.clone();
    var descWidth = 10;

    $desc.find("li").each(function (i) {
        descWidth += $(this,i).outerWidth(true);
    });

    //var endPos = $righttoleft.width() - descWidth;

    $desc.add($cloneddesc).css({
        "width": descWidth + "px"
    });

    $cloneddesc.addClass("cloned").appendTo($righttoleft);

    var infinite = new TimelineMax({repeat: -1, paused: true });
    var time = 40;

    infinite
        .fromTo($desc, time, {rotation: 0.01, x: 0}, {force3D: true, x: -descWidth, ease: Linear.easeNone}, 0)
        .fromTo($cloneddesc, time, {rotation: 0.01, x: descWidth}, {force3D: true, x: 0, ease: Linear.easeNone}, 0)
        .set($desc, {force3D: true, rotation: 0.01, x: descWidth})
        .to($cloneddesc, time, {force3D: true, rotation: 0.01, x: -descWidth, ease: Linear.easeNone}, time)
        .to($desc, time, {force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone}, time)
        .progress(1).progress(0)
        .play();

    $righttoleft.on("mouseenter", function () {
        infinite.pause();
    }).on("mouseleave", function () {
        infinite.play();
    });
});


