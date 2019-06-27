function magic() {
var x1 = parseInt(document.getElementById("1st").value);
var x2 = parseInt(document.getElementById("2nd").value);
var x3 = parseInt(document.getElementById("3rd").value);
var x4 = parseInt(document.getElementById("4th").value);
var x5 = parseInt(document.getElementById("5th").value);
var x6 = parseInt(document.getElementById("6th").value);
var x7 = parseInt(document.getElementById("7th").value);
var x8 = parseInt(document.getElementById("8th").value);
var x9 = parseInt(document.getElementById("9th").value);
var sum=15
  if(x1!="" && x2!="" && x3!="" && x4!="" && x5!="" && x6!="" && x7!="" && x8!="" && x9!=""){
    if(x1!=x2 && x1!=x3 && x1!=x4 && x1!=x5 && x1!=x6 && x1!=x7 && x1!=x8 && x1!=x9 && x2!=x3 && x2!=x4 && x2!=x5 && x2!=x6 && x2!=x7 && x2!=x8 && x2!=x9 && x3!=x4 && x3!=x5 && x3!=x6 && x3!=x7 && x3!=x8 && x3!=x9 && x4!=x5 && x4!=x6 && x4!=x7 && x4!=x8 && x4!=x9 && x5!=x6 && x5!=x7 && x5!=x8 && x5!=x9 && x6!=x7 && x6!=x8 && x6!=x9 && x7!=x8 && x7!=x9 && x8!=x9  ){
        if(x1+x2+x3==sum && x4+x5+x6==sum && x7+x8+x9==sum && x1+x4+x7==sum && x2+x5+x8==sum && x3+x6+x9==sum && x1+x5+x9==sum && x3+x5+x7==sum){
            document.getElementById("msg").innerHTML ="This is a magic square !";
        }
        else{
            document.getElementById("msg").innerHTML ="This is not a magic square";
         }
    }
    else{
        document.getElementById("msg").innerHTML ="You cannot use the same number twice :)";
    }
 }
 else{
     document.getElementById("msg").innerHTML ="there is a empty box,please try again"
 }

}   
