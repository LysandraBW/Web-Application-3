$(document).ready(function () {
    initCardContainerInteraction();

    $(".left-arrow").click(function() {
        cardContainerMove('LEFT');            
    });

    $(".right-arrow").click(function() {
        cardContainerMove('RIGHT');
    });
})
