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

function toggleEnable(id) {
    let textbox = document.getElementById(id);

    if (textbox.disabled) {
        // If disabled, do this
        document.getElementById(id).disabled = false;
    } else {
        // Enter code here
        document.getElementById(id).disabled = true;
    }
}

function expandQuestions(){
    alert('Skryte a nedostupne otazky su dostupne!');
    toggleEnable("word");
}

function timer(){
    let d = new Date();
    lastClick = d.getTime();
}

function validateImage() {
    let image = document.forms["non_resp_form"]["imgquestion"].value;
    return image === "5"
}

function validateColor(){
    let color = document.querySelector('input[name="color"]:checked').value;
    return color === "green";
}

function formatDate(date) {
    let d = new Date(date),
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
    let todayDate = formatDate(new Date());
    let date = document.forms["non_resp_form"]["todaysdate"].value;
    // alert(todayDate);
    // alert(date);
    return todayDate === date;
}


function validateVideo() {
    let videoCheckboxes = document.getElementsByName("qvideo");
    const correctAnswers = ["camera", "laptop", "coffee"];
    let correct = 0;
    for (let checkbox of videoCheckboxes){
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
    let range = document.getElementById("vol").value;
    return range === "25";
}

function validateTime(){
    let time = document.getElementById("questiontime").value.split(":");
    const hours = parseInt(time[0]);
    const mins = parseInt(time[1]);
    return hours === 13 && mins > 35 && mins < 50;
}

function validateBrightestColor(){
    let color = document.getElementById("brightestcolor").value;
    return color === "#ffffff"
}

function validatePlaceholder(){
    let answer = document.getElementById("filltext").value;
    return answer === "123nrew123";
}

function validateNavbar() {
    let item = document.querySelector('input[name="item"]:checked').value;
    return item === "about";
}

function validateYtb() {
    let image = document.forms["non_resp_form"]["prisoners"].value;
    return image === "4"
}

function validatePageNumber() {
    let image = document.forms["non_resp_form"]["pagequestion"].value;
    return image === "5";
}

function validateOl() {
    let answer = document.forms["non_resp_form"]["ol_choice"].value;
    return answer === "4";
}

function validateCode() {
    let answer = document.getElementById("word").value;
    return answer === "nisi";
}

function validateTable() {
    let answer = document.getElementById("tablequestion").value;
    return answer === "179";
}

function validateIceCream() {
    let iceCream = document.forms["non_resp_form"]["ice-cream-choice"].value;
    return iceCream === "orange" || iceCream === "Pomarancova";
}

function validateMap() {
    let city = document.forms["non_resp_form"]["city_choice"].value;
    return city === "Trebisov";
}

function validateForm(){
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let d = new Date();
    const timeElapsed = (d.getTime() - lastClick) /1000;
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