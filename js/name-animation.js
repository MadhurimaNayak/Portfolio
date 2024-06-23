window.onload = function() {
    var $lefttoright = $(".left-to-right");
    var $name = $lefttoright.find("ul.name");
    var $clonedname = $name.clone();
    var nameWidth = 10;

    $name.find("li").each(function (i) {
        nameWidth += $(this, i).outerWidth(true);
    });

    //var endPos = $lefttoright.width() - nameWidth;

    $name.add($clonedname).css({
        "width": nameWidth + "px"
    });

    $clonedname.addClass("cloned").appendTo($lefttoright);

    var infinite = new TimelineMax({ repeat: -1, paused: true });
    var time = 40;

    infinite
        .fromTo($name, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -nameWidth, ease: Linear.easeNone }, 0)
        .fromTo($clonedname, time, { rotation: 0.01, x: nameWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
        .set($name, { force3D: true, rotation: 0.01, x: nameWidth })
        .to($clonedname, time, { force3D: true, rotation: 0.01, x: -nameWidth, ease: Linear.easeNone }, time)
        .to($name, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
        .progress(1).progress(0)
        .play();

    $lefttoright.css('visibility', 'visible');
};
