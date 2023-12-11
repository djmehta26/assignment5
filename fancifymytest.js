// JavaScript code for fancifymytext.html

// Test alert
alert("script is running!");

// Function to make text bigger
function makeBigger() {
    var textArea = document.getElementById("inputText");
    textArea.style.fontSize = "20px"; // You can adjust the font size as needed
}
function applyStyles() {
    var textArea = document.getElementById("inputText");
    var fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // Reset styles for BoringBetty
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    textarea.style.textTransform="uppercase"
    let str=textarea.value.split(".");
    let str2=str.join("-Moo");
    textarea.value=str2;
}