// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";

//will add an event for the left key
function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    };
  };

//will add an event for the right keg
function moveDodgerRight() {
    var rightNumbers = dodger.style.left.replace("px","");
    var right = parseInt(rightNumbers,10);

    if (right > 0) {
        dodger.style.left = `${right + 1}px`;
    };

};

//will create event key listeners for all keys
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    };

    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    };


});


