$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carousel-button").click(function () {
        if ($("#carousel-button").children('span').hasClass("fa-pause")) {
            $("#mycarousel").carousel("pause");
            $("#carousel-button").children("span")
                .removeClass("fa-pause")
                .addClass("fa-play");
        } else {
            $("#mycarousel").carousel("cycle");
            $("#carousel-button").children("span")
                .removeClass("fa-play")
                .addClass("fa-pause");
        }
    });
    $("#login-button").click(function () {
        $("#login-modal").modal({ show: true });
    });
    $("#reserve-button").click(function () {
        $("#reservation-modal").modal({ show: true });
    });
})