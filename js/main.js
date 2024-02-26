$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".couner-up")
    $(".home-image path").on('mouseover', function () {
        currentFloor = $(this).attr("data-floor");
        $('.counter').text(currentFloor);
    });

    counterUp.on("click", function() {
        currentFloor++;
        usCurentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false});
        $('.counter').text(usCurentFloor);
    })
});