    $(".animated").click(function () {
        alert("don't touch my rectangles!!");
    });
    $(".animated").mouseenter(function () {
        $(".animated").fadeTo("fast", 0.25);
    });
    $(".animated").mouseleave(function () {
        $(".animated").fadeTo("fast", 1);
    });
