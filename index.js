var header1 = document.getElementById("header1");
var i = 0;
var direction = -1;
var arr = [2,4,6,8,10,12,14];
var length = arr.length;

function TextSpacing(){
    header1.style.letterSpacing = String(arr[i]) + "px";
    if(i == length || i == 0){
        direction *= -1;
    }
    i += 1 * direction;
}

setInterval("TextSpacing()", 100);