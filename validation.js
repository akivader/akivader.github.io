var lastClick;

function writeColor() {
    var image = document.forms["formular"]["imgquestion"].value;
    var d = new Date();
    var timeElapsed = d.getTime() - lastClick;
    if (image === "4"){
        alert("Cant be 4");
        return false;
    } else {
        alert(timeElapsed);
        return false;
    }
}

function timer(){
    var d = new Date();
    lastClick = d.getTime();
}