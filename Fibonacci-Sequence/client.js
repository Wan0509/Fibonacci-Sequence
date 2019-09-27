/*
 * Fibonacci-Sequence up to 100. position
 * Author: "Benjamin Hufschmid"
 */

//Sleepfunction between the output
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//Varialbes
//var i=1;
var i;
var counter = 1;
var number1 = 0;
var number2 = 1;
var Result;


//window.onload = init;
  async function init() {
        i = true
        var one = document.createElement("LI");
        var textnode = document.createTextNode(number1);
        one.appendChild(textnode);
        document.getElementById("numbers").appendChild(one);
        await sleep(1500);

        var two = document.createElement("LI");
        var textnode = document.createTextNode(number2);
        two.appendChild(textnode);
        document.getElementById("numbers").appendChild(two);
        await sleep(1500);
 
        while (i == true && counter <= 100) {

        Result = number1 + number2;

        var result = document.createElement("LI");
        var textnode = document.createTextNode(Result);
        result.appendChild(textnode);
        document.getElementById("numbers").appendChild(result);

        number1 = number2;
        number2 = Result;
        counter = counter+1;
        await sleep(1500);
        
    }
}


  async function init2() {
        i = false;
  }