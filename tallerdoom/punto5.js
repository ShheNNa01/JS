function amorchitohemosho() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");

    if (checkBox.checked) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
