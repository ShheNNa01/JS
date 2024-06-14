function amorchitohemosho() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    var image = document.getElementById("advaroImage");
    var body = document.body;

    if (checkBox.checked) {
        text.style.display = "block";
        image.style.display = "block";
        body.classList.add("crazy-mode");
    } else {
        text.style.display = "none";
        image.style.display = "none";
        body.classList.remove("crazy-mode");
    }
}