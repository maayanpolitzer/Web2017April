function changeVisibility(elementID) {
    var element = document.getElementById(elementID);
    if (element.style.visibility == "visible") {
        element.style.visibility = "hidden";
    } else {
        element.style.visibility = "visible";
    }
}
