var lastClick;

// function writeColor() {
//     var image = document.forms["non_resp_form"]["imgquestion"].value;
//     if (image === "4"){
//         alert("Cant be 4");
//         return false;
//     } else {
//         alert("Form done in: " + timeElapsed +"s");
//         return false;
//     }
// }

function expandQuestions(){
    alert('Skryte a nedostupne otazky su dostupne!');
    document.getElementById("word").disable = false;
}

function timer(){
    var d = new Date();
    lastClick = d.getTime();
}

function validateImage() {
    var image = document.forms["non_resp_form"]["imgquestion"].value;
    return image === "5"
}

function validateColor(){
    var color = document.querySelector('input[name="color"]:checked').value;
    return color === "green";
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function validateDate(){
    var todayDate = formatDate(new Date());
    var date = document.forms["non_resp_form"]["todaysdate"].value;
    // alert(todayDate);
    // alert(date);
    return todayDate === date;
}


function validateVideo() {
    var videoCheckboxes = document.getElementsByName("qvideo");
    const correctAnswers = ["camera", "laptop", "coffee"];
    var correct = 0;
    for (var checkbox of videoCheckboxes){
        if (checkbox.checked){
            if (correctAnswers.includes(checkbox.value)){
                correct++;
            } else {
                return false;
            }
        }
    }
    return correct === 3;
}

function validateRange(){
    var range = document.getElementById("vol").value;
    return range === "25";
}

function validateTime(){
    var time = document.getElementById("questiontime").value.split(":");
    const hours = parseInt(time[0]);
    const mins = parseInt(time[1]);
    return hours === 13 && mins > 35 && mins < 50;
}

function validateBrightestColor(){
    var color = document.getElementById("brightestcolor").value;
    return color === "#ffffff"
}

function validatePlaceholder(){
    var answer = document.getElementById("filltext").value;
    return answer === "123nrew123";
}

function validateNavbar() {
    var item = document.querySelector('input[name="item"]:checked').value;
    return item === "about";
}

function validateYtb() {
    var image = document.forms["non_resp_form"]["prisoners"].value;
    return image === "4"
}

function validatePageNumber() {
    var image = document.forms["non_resp_form"]["pagequestion"].value;
    return image === "5";
}

function validateOl() {
    var answer = document.forms["non_resp_form"]["ol_choice"].value;
    return answer === "4";
}

function validateCode() {
    var answer = document.getElementById("word").value;
    return answer === "nisi";
}

function validateTable() {
    var answer = document.getElementById("tablequestion").value;
    return answer === "179";
}

function validateIceCream() {
    var iceCream = document.forms["non_resp_form"]["ice-cream-choice"].value;
    return iceCream === "orange" || iceCream === "Pomarancova";
}

function validateMap() {
    var city = document.forms["non_resp_form"]["city_choice"].value;
    return city === "Trebisov";
}

function validateForm(){
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var d = new Date();
    var timeElapsed = (d.getTime() - lastClick) /1000;
    validateImage() ? correctAnswers++ : incorrectAnswers++;
    validateColor() ? correctAnswers++ : incorrectAnswers++;
    validateDate() ? correctAnswers++ : incorrectAnswers++;
    validateVideo() ? correctAnswers++ : incorrectAnswers++;
    validateRange() ? correctAnswers++ : incorrectAnswers++;
    validateTime() ? correctAnswers++ : incorrectAnswers++;
    validateBrightestColor() ? correctAnswers++ : incorrectAnswers++;
    validatePlaceholder() ? correctAnswers++ : incorrectAnswers++;
    validateNavbar() ? correctAnswers++ : incorrectAnswers++;
    validateYtb() ? correctAnswers++ : incorrectAnswers++;
    validatePageNumber() ? correctAnswers++ : incorrectAnswers++;
    validateOl() ? correctAnswers++ : incorrectAnswers++;
    validateCode() ? correctAnswers++ : incorrectAnswers++;
    validateTable() ? correctAnswers++ : incorrectAnswers++;
    validateIceCream() ? correctAnswers++ : incorrectAnswers++;
    validateMap() ? correctAnswers++ : incorrectAnswers++;


    alert("Form done in: " + timeElapsed +"s" + "\nCorrect: " + correctAnswers + "\nIncorrect: " + incorrectAnswers);
}