$(document).ready(function () {
    var $lefttoright = $(".left-to-right");
    var $name = $lefttoright.find(".name");
    var $clonedname = $name.clone();
    var nameWidth = 10;

    $name.find("h2").each(function (i) {
        nameWidth += $(this).outerWidth(true);
    });

    //var endPos = $lefttoright.width() - nameWidth;

    $name.add($clonedname).css({
        "width": nameWidth + "px"
    });

    $clonedname.addClass("cloned").appendTo($lefttoright);

    var infinite = new TimelineMax({ paused: true });
    var time = 40;

    infinite
        .fromTo($name, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -nameWidth, ease: Linear.easeNone })
        .fromTo($clonedname, time, { rotation: 0.01, x: nameWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
        .to($name, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone })
        .to($clonedname, time, { force3D: true, rotation: 0.01, x: nameWidth, ease: Linear.easeNone }, 0)
        .progress(1).progress(0)
        .repeat(-1)
        .play();

    $lefttoright.on("mouseenter", function () {
        infinite.pause();
    }).on("mouseleave", function () {
        infinite.play();
    });
});
