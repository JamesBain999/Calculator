//function for displaying numbers and operators on the screen
function displayOnScreen(clickedButton){
    const display = clickedButton.textContent
    document.getElementById("displayScreen").innerText += display
}

//function for clearing the screen
function clearScreen(){
    document.getElementById("displayScreen").innerText = ""
}

//function for using the equals sign
function equalsDisplayScreen(){
    const mathOperation = document.getElementById("displayScreen").innerText
    function evaluate(num){
        return new Function('return ' + num)();
    }
    const result = evaluate(mathOperation)
    document.getElementById("displayScreen").innerText = result
}