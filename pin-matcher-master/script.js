// Making the notification disable
document.getElementById("matchNotification").style.display = "none"
document.getElementById("misMatchNotification").style.display = "none"
// Generating random Number
function generateRandom(){
    document.getElementById('generated-num').value = Math.floor(Math.random()*8999+1000);
}
// ACTIVE THE NUMBER BUTTONS
function numberButton(num) {
    document.getElementById('password-input').value = document.getElementById('password-input').value + num;
}
// active the delete button
function deleteBtn() {
    let inputValue = document.getElementById('password-input').value;
    document.getElementById('password-input').value = inputValue.substring(0,inputValue.length-1);
}
// active the clear button
function clearEverything() {
    document.getElementById('password-input').value = "";
}
// Active the submit Button
function submitButton() {
   let inputNumber = document.getElementById('password-input').value;
   let generatedNumber = document.getElementById('generated-num').value;
   if (inputNumber == generatedNumber) {
    document.getElementById("matchNotification").style.display = "block"
    document.getElementById("misMatchNotification").style.display = "none"
   } else {
    document.getElementById("matchNotification").style.display = "none"
    document.getElementById("misMatchNotification").style.display = "block"
   }
}