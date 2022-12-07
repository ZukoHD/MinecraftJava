var headerText = document.getElementById("header_text");
var bottomText = document.getElementById("bottom_text");
var windowURL = "https://eaglercraft-server.ayunami2000.repl.co/";

function wait(seconds){
    var actualSeconds = (seconds * 1000);
    var start = new Date().getTime();
    var end = start;
    while(end < start + actualSeconds) {
      end = new Date().getTime();
   }
 }

function openMC() {
    var popup = window.open(windowURL, '_blank', 'location=yes,scrollbars=yes,status=yes,fullscreen=yes');
    if (popup == null) {
        alert("Please allow us to show Popups.")
    }
}

function setHTML() {
    headerText.innerHTML = "Opened Successfully!";
    bottomText.innerHTML = "Opened Eaglercraft in a new Page!";
}

function main() {
    wait(3);
    openMC();
    setHTML();
}

main();
