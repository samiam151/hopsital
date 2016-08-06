(function(){
    // Definitions
    var inner = get('.carouselInner'),
        backButton = get('#backButton'),
        forwardButton = get('#forwardButton'),
        boxWidth = get('.boxes').offsetWidth,
        boxesShown = 4,
        numBoxes = document.querySelectorAll('.boxes').length;

    // Add functionality to BACK and FORWARD buttons
    backButton.addEventListener('click', function(){
        moveBack(boxWidth);
    });

    forwardButton.addEventListener('click', function(){
        moveForward(boxWidth);
    });

    // Utility Functions
    function moveBack(amount){
        var left = getLeftPosition(inner); 
        if(left < 0){ 
            inner.style.left = (left += amount) + 'px';
        }
    }

    function moveForward(amount){
        var left = getLeftPosition(inner);
        if(left > -(boxWidth * (numBoxes - boxesShown))){
            inner.style.left = (left -= amount) + 'px';
        }
    }

    function getLeftPosition(el){
        return Number(el.style.left.replace(/px/g, ''))
    }

    function get(sel){
        return document.querySelector(sel);
    }
})();