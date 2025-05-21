$(function () {
    $("p").dblclick(function () {
        $(this).hide();
    });
});

$(function () {
    $("#spooky").mouseenter(function () {
        $(this).text("You shouldn't have done that!");
    });
});

$(function () {
    $("#spooky").mouseleave(function () {
        alert("Who asked you to leave?")
    });
});

$(function () {
    $("#click-see").mousedown(function () {
        alert("Shouldn't have clicked");
    });
});

$(function () {
    $("#click-leave").mouseup(function () {
        alert("Shouldn't have stopped clicking");
    });
});

$(function () {
    $(".hover-test").hover(function () {
        $(this).css("background-color", "yellow");
    },
        function () {
            $(this).css("background-color", "white");
        }
    );
});

$(function () {
    $("input").focus(function () {
        $(this).css("background-color", "green");
    });
});

