$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-button.couner-arrow-up");
    var counterDown = $(".counter-button.couner-arrow-down");
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    floorPath.on('mouseover', function () {
        currentFloor = $(this).attr("data-floor");
        $('.counter').text(currentFloor);
    });

    floorPath.on('click', togglemodal);
    modalCloseButton.on("click", togglemodal);
    viewFlatsButton.on('click', togglemodal);
    
    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            var usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            var usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
    function togglemodal () {
        modal.toggleClass("is-open");
    }
});
