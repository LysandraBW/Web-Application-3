let cardWidth, cardContainer,cardContainerLeftPosition, leftArrow, rightArrow;

function initCardContainerInteraction() {
    cardWidth = parseInt($("info-card").css("min-width")) + parseInt($(".card-container").css("column-gap"));
    cardContainer = $(".card-container");
    leftArrow = $(".left-arrow");
    rightArrow = $(".right-arrow");
}

function cardContainerMove(direction) {
    cardContainerLeftPosition = parseInt(cardContainer.css("left"));

    if (direction == 'LEFT' && cardContainerLeftPosition < 0)
        cardContainerLeftPosition += cardWidth;
    else if (direction == 'RIGHT' && cardContainerLeftPosition > -2125)
        cardContainerLeftPosition -= cardWidth;
    else
        return;

    leftArrow.css("left", -1 * cardContainerLeftPosition);
    rightArrow.css("right", cardContainerLeftPosition);
    cardContainer.animate({left: cardContainerLeftPosition + "px"}, 225);
}
