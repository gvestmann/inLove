const popUp = document.getElementById('pop-up');
const signUpButton = document.getElementById('sign-up');
const closeButton = document.getElementById('close-btn') 

function displayPopUp() {
    popUp.style.display = "block"
}

function hidePopUp() {
    popUp.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
}