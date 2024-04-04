let btn1 = document.querySelector("#btn1");
function changeBackgroundColor() {
    let rangBir = bgOzgarishlari();
    let rangIkki = bgOzgarishlari();
    let gradient = "linear-gradient(to right, " + rangBir + ", " + rangIkki + ")";
    document.body.style.background = gradient;
}

function bgOzgarishlari() {
    let rang1 = Math.floor(Math.random() * 255);
    let rang2 = Math.floor(Math.random() * 255);
    let rang3 = Math.floor(Math.random() * 255);
    return "rgb(" + rang1 + "," + rang2 + "," + rang3 + ")";
}