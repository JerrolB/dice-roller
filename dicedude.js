let log = "";
let timestamp = "";

let monthArr = new Array();
monthArr[0] = "Jan";
monthArr[1] = "Feb";
monthArr[2] = "Mar";
monthArr[3] = "Apr";
monthArr[4] = "May";
monthArr[5] = "Jun";
monthArr[6] = "Jul";
monthArr[7] = "Aug";
monthArr[8] = "Sep";
monthArr[9] = "Oct";
monthArr[10] = "Nov";
monthArr[11] = "Dec";

function timeStamp() {
  let date = new Date();
  let month = monthArr[date.getMonth()];
  let day = date.getDate();
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  hours = hours < 10 ? "0" + hours : hours;
  let ampm = date.getHours() >= 12 ? "PM" : "AM";
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  timestamp = "["+month+" "+day+", "+hours+":"+minutes+":"+seconds+" "+ampm+"]";
  return timestamp;
}

//N sided die rolls to log
function dieRoll (d) {
  let n = parseInt(document.getElementById("n").value);
  let mod = parseInt(document.getElementById("mod").value);
  var rolls = new Array();

  for (i = 0; i < n; i++) {
    rolls[i] = Math.floor(Math.random() * d) + 1;
  }

  console.log(rolls);

  let rollsum = 0;
  for (j = 0; j < n; j++) {
    rollsum += rolls[j];
  }

  console.log(rollsum);

  let total = rollsum + mod;

    if (mod == 0) {mod = "";}
    if (mod > 0) {mod = "+"+mod;}

    timestamp = timeStamp();

  let result = "<li tabindex='0'>"+timestamp+" You rolled <strong>"+n+"d"+d+mod+"</strong> for <strong>"+total+"</strong></li>";
  log = result + log;
  let updateLog = document.getElementById("log").innerHTML = log;
  return updateLog;
}

//Keyboard navigation

$(document).keydown(
    function(e)
      {
        if (e.keyCode == 37) {
          if (document.activeElement.id == "d4") {document.getElementById("n").focus();}
          if (document.activeElement.id == "d6") {document.getElementById("d4").focus();}
          if (document.activeElement.id == "d8") {document.getElementById("d6").focus();}
          if (document.activeElement.id == "d10") {document.getElementById("d8").focus();}
          if (document.activeElement.id == "d12") {document.getElementById("d10").focus();}
          if (document.activeElement.id == "d20") {document.getElementById("d12").focus();}
          if (document.activeElement.id == "mod") {document.getElementById("d20").focus();}
        }

        if (e.keyCode == 39) {
          if (document.activeElement.id == "d20") {document.getElementById("mod").focus();}
          if (document.activeElement.id == "d12") {document.getElementById("d20").focus();}
          if (document.activeElement.id == "d10") {document.getElementById("d12").focus();}
          if (document.activeElement.id == "d8") {document.getElementById("d10").focus();}
          if (document.activeElement.id == "d6") {document.getElementById("d8").focus();}
          if (document.activeElement.id == "d4") {document.getElementById("d6").focus();}
          if (document.activeElement.id == "n") {document.getElementById("d4").focus();}
        }

        if (e.keyCode == 40) {
          if (document.activeElement.className == "diceroll") {document.getElementById("logbutton").focus();}
          else if (document.activeElement.id == "logbutton") {$('li:first').focus();}
          else if ($('li').is(':focus')) {$("li:focus").next().focus();}
        }

        if (e.keyCode == 38) {
          if (document.activeElement.id == "logbutton") {document.getElementById("n").focus();}
          if ($('li:first').is(':focus')) {document.getElementById("logbutton").focus();}
          if ($('li').is(':focus')) {$("li:focus").prev().focus();}
        }

      });
