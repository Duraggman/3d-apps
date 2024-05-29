// Find the buttons
var fBtn = document.getElementById("b-front");
var bBtn = document.getElementById("b-back");
var lBtn = document.getElementById("b-left");
var rBtn = document.getElementById("b-right");
var oBtn = document.getElementById('b-off');

// Function to set the viewpoint
function setViewpoint(viewpoint) {
    var viewpoint = document.getElementById(viewpoint);
    viewpoint.setAttribute('bind', 'true');
}

// Add event listeners to the buttons
fBtn.addEventListener("click", function () {
    setViewpoint('model__cam-front');
});

bBtn.addEventListener("click", function () {
    setViewpoint('model__cam-back');
});

lBtn.addEventListener("click", function () {
    setViewpoint('model__cam-left');
});

rBtn.addEventListener("click", function () {
    setViewpoint('model__cam-right');
});

oBtn.addEventListener("click", function () {
    if (document.getElementById('switcher').getAttribute('whichChoice') == '-1') {
        oBtn.textContent = "Off";
        document.getElementById('switcher').setAttribute('whichChoice', '0');
    }
    else{
        oBtn.textContent = "On";
        document.getElementById('switcher').setAttribute('whichChoice', '-1');
    }
});