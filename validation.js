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
    alert(correct);
    return correct === 3;
}

function validateForm(){
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    // var d = new Date();
    var timeElapsed = (d.getTime() - lastClick) /1000;
    // validateImage() ? correctAnswers++ : incorrectAnswers++;
    // validateColor() ? correctAnswers++ : incorrectAnswers++;
    // validateDate() ? correctAnswers++ : incorrectAnswers++;
    validateVideo() ? correctAnswers++ : incorrectAnswers++;

    alert("Form done in: " + timeElapsed +"s" + "\nCorrect: " + correctAnswers + "\nIncorrect: " + incorrectAnswers);
}