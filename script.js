// Let's grab them DOM elements
const popUp = document.getElementById('pop-up');
const signUpButton = document.getElementById('sign-up');
const closeButton = document.getElementById('close-btn') 

// Let's display that pop-up as a block
function displayPopUp() {
    popUp.style.display = "block"
}

// Now let's hide that pop-up when user clicks the X
function hidePopUp() {
    popUp.style.display = "none"
}

// Finally, if the user clicks outside of the pop-up, that thing will disappear
window.onclick = function(event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
}