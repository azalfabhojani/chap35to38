// alert("hello world")

// document.write("<h1> Chapter 35 to 38 </h1>");
// document.write("<h2> FUNCTION </h2>");


// Q1
/*function dateandTime(){
var todayDate = new Date();
document.write("<h2> Current Date & Time: </h2>" + todayDate);
}
dateandTime();*/

// Q2
// function userName(){
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");

// document.write("HELLO!  "  +  firstName + " " + lastName );

// }
// userName();

// Q3
/*var num1 = +prompt("Enter Num 1");
var num2 = +prompt("Enter Num 2");

function add (num1 , num2){
    alert( num1 + num2 )
}

add(num1 , num2)*/

// Q4
// var num1 = +prompt("Enter 1st Num");
// var operator = prompt("Enter Operator for action");
// var num2 = +prompt("Enter 2nd Num");
// function calculator(num1,operator,num2) {
//     document.write("<h2>Calculator</h2>" );
//     if (operator == "+") {
//         return document.write("<h3>Additon</h3>"),
//          document.write(num1 + num2 );
//     } 
//     else if (operator == "-") {
//         return document.write("<h3>Subtraction</h3>"),
//         document.write(num1 - num2);
//     }
//     else if (operator == "*"){
//         return document.write("<h3>Multiplication</h3>"),
//          document.write(num1 * num2);
//     }
//     else if (operator == "/"){
//         return document.write("<h3>Division</h3>"),
//         document.write(num1 / num2);
//     }
//     else if (operator == "%"){
//         return document.write("<h3>Percentage</h3>"),
//          document.write(num1 % num2);
//     }
//     else{
//         return document.write("Error! Please Enter Correct Operator");
//     }
// }
//  calculator(num1,operator,num2);

// Q5
/*function getSquare(num){
var square = num * num;
return square;
}
var a = +prompt("Enter Num For Square");
alert ("square of " + a + "argument is: " + getSquare(a));*/

// Q6
// var num = +prompt("Enter Number for Factorize");
// function fact(num) {
//     if (num == 0) {
//         return 1;
//     }
//     else if (num < 0) {
//         return -1;
//     }
//     else {
//         return (num * fact(num - 1));
//     }
// }
// document.write("Factorial Of Number is: " + fact(num));

// Q7
/*function count(startNum , endNum){
for(var i= startNum; i <= endNum ; i++){
  document.write(i + "<br>");
}
}
var startNum = +prompt("Enter Starting Number : ");
var endNum = +prompt("Enter Ending Number");

count(startNum , endNum);*/

// Q8
// document.write("<br><h2> Find Hypoteneous </h2>");
// var perp = +prompt("Enter Perpendicular value") * 2;
// var hypo;
// function calculateHypo(perp) {
//     function calculateSqr(perp) {
//         return perp * 2;
//     }
//     return hypo = 10 + perp;
//     calculateSqr()
// }
// document.write("Hypoteneous is:" + " " + calculateHypo(perp))


// Q9
// var width = +prompt("Enter Width");
// var height = +prompt("Enter Hight");
// function areaoftriangle(width,height) {
//     var area = width*height;
//     return area;
// }
// document.write("Area Of Triangle is: ");
// document.write(areaoftriangle(width,height));

// Q10
/*var palindrome = prompt("Enter A Palindrome letter");
var len = palindrome.length;
function palin() {
    for (var i = 0; i < len / 2; i++) {
        if (palindrome[i] != palindrome[len - 1 - i]) {
            document.write("its not a palindrom")
            break
        }
        else if (palindrome[i] == palindrome[len - 1 - i]) {
            document.write('Its a Palindrome <br><br><br>')
            break
        }
    }
}
palin()*/

// Q11
// document.write("<h2>To Upper Case String</h2>");
// function titleCase(str) {
//     var arr = str.split(" ");
//     var result = arr.map(
//         function (val) {
//             return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
//         }
//     )
//     return result;
// }

// var string = titleCase("the quick brown fox").join(" ");
// document.write("EXAMPLE STRING:" + " " + "the quick brown fox" + "<br>")
// document.write("EXPECTED OUTPUT:" + " " + string )


// q12
// document.write("<h2>Longest String</h2>");
// function longestString(str) {
//     var arr = str.split(" ");
//     var result = "";
//     for (var i = 0; i < arr.length; i++) {
//         var currenItem = arr[i];
//         if (currenItem.length > result.length) {
//             result = arr[i]
//         }
//     }
//     return result;
// }
// var string1 = longestString('Web Development Tutorial');
// document.write("Example String:" + " " + "Web Development Tutorial" + "<br>")
// document.write("Expected Output:" + " " + string1 + "<br><br><br>")


// Q14
var radius = +prompt("Enter radius Number");
function calcCircumference(radius) {

    var cirFer = (2*3.14)*radius;
    return cirFer;
}
document.write("Circumference of circle :  ");
document.write(calcCircumference(radius));


function calcArea(radius) {
    var area = 3.14*(radius*radius);
    return area;
}
document.write("<br>Area of circle:  ");
document.write(calcArea(radius));























