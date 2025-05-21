$(function () {
    $("p").dblclick(function () {
        $(this).hide();
    });
});

$(function () {
    $("#spooky").mouseenter(function () {
        alert("You entered an unauthorized area");
    });
});