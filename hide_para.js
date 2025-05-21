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
        $(this).text("Who asked you to leave?")
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
    $("input").blur(function () {
        $(this).css("background-color", "yellow");
    });
});
$(function () {
    $(".multiple").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });
});

$(function () {
    $("#custom-button").click(function () {
        $("#toggle-test").toggle();
    });
});

$(function () {
    $("#animate").click(function () {
        $("#custom-div1").animate({ left: '250px' });
    });
});
$(function () {
    $("#custom-anime").click(function () {
        $("#custom-div2").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});