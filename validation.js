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


function updateInput(val) {
    document.getElementById("rangeInput").value=val;
}

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

function toggleExpand(id, id1) {
    let form = document.getElementById(id);

    if (form.hidden) {
        // If disabled, do this
        document.getElementById(id).hidden = false;
    }
    document.getElementById(id1).hidden = true;
}

function expandQuestions(){
    alert('Skryte a nedostupne otazky su dostupne!');
    toggleEnable("word");
    toggleEnable("vol")
}

function timer(){
    let d = new Date();
    lastClick = d.getTime();
    toggleExpand("non_resp_form", "start_button");
}

function validateImage() {
    let image = document.forms["non_resp_form"]["imgquestion"].value;
    return image === "5"
}

function validateColor(){
    let color = document.querySelector('input[name="color"]:checked') !== null;
    if (color){
        return document.querySelector('input[name="color"]:checked').value === "green";
    } else {
        return false;
    }
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
    return parseInt(range) < 25;
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
    return answer === "D";
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

function validateFormComponents(correctAnswers, incorrectAnswers, wrongAnswers){
    if (validateImage()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("1");
    }
    // validateImage() ? correctAnswers++ : incorrectAnswers++;
    if (validateColor()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("2");
    }
    // validateColor() ? correctAnswers++ : incorrectAnswers++;
    if (validateDate()) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("3");
    }
    // validateDate() ? correctAnswers++ : incorrectAnswers++;
    if (validateVideo()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("4");
    }

    // validateVideo() ? correctAnswers++ : incorrectAnswers++;
    if (validateRange()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("5");
    }
    // validateRange() ? correctAnswers++ : incorrectAnswers++;
    if (validateTime()) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("6")
    }
    // validateTime() ? correctAnswers++ : incorrectAnswers++;
    if (validateBrightestColor()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("7")
    }
    // validateBrightestColor() ? correctAnswers++ : incorrectAnswers++;
    if (validatePlaceholder()) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("8");
    }
    // validatePlaceholder() ? correctAnswers++ : incorrectAnswers++;
    if (validateNavbar()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("9");
    }
    // validateNavbar() ? correctAnswers++ : incorrectAnswers++;
    if (validateYtb()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("10");
    }
    // validateYtb() ? correctAnswers++ : incorrectAnswers++;
    if (validatePageNumber()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("11");
    }
    // validatePageNumber() ? correctAnswers++ : incorrectAnswers++;
    if (validateOl()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("12");
    }
    // validateOl() ? correctAnswers++ : incorrectAnswers++;
    if (validateCode()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("13");
    }
    // validateCode() ? correctAnswers++ : incorrectAnswers++;
    if (validateTable()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("14");
    }
    // validateTable() ? correctAnswers++ : incorrectAnswers++;
    if (validateIceCream()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("15");
    }
    // validateIceCream() ? correctAnswers++ : incorrectAnswers++;
    if (validateMap()){
        correctAnswers++;
    } else {
        incorrectAnswers++;
        wrongAnswers.push("16");
    }
    // validateMap() ? correctAnswers++ : incorrectAnswers++;
    return { correctAnswers: correctAnswers, incorrectAnswers: incorrectAnswers, wrongAnswers: wrongAnswers};
}

function validateForm(){
    let correct = 0;
    let incorrect = 0;
    let wrong = [];
    let d = new Date();
    const timeElapsed = (d.getTime() - lastClick) /1000;
    const {correctAnswers, incorrectAnswers, wrongAnswers} = validateFormComponents(correct, incorrect, wrong);

    alert("Form done in: " + timeElapsed +"s" + "\nCorrect: " + correctAnswers + "\nIncorrect: " + incorrectAnswers + "\nWrong answers: " + wrongAnswers);
}