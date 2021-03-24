// --------------- chapter # 21-25 ---------------
// //Q1
// var fn = prompt("Enter your first name")
// var ln = prompt("Enter your last name")
// var fullName= fn+ln;
// alert("Welcome "+fullName)
// //Q2
// var ph = prompt("Tell me your favorite mobile phone model")
// document.write("Favorite mobile phone model : "+ph +"<br> Length of String : "+ph.length)
// //Q3
// var str = "Pakistani";
// document.write("String: "+str + "<br> index of letter 'n' is : "+ str.indexOf('n'))
// //Q4
// var str = "Hello World";
// document.write("String: "+str + "<br> last index of letter 'l' is : "+ str.lastIndexOf('l'))
// //Q5
// var str = "Pakistani";
// document.write("String: "+str + "<br>Character at index 3 is : "+ str[3])
// //Q6
// var fn = prompt("Enter your first name")
// var ln = prompt("Enter your last name")
// var fullName= fn.concat(ln);
// alert("Welcome "+fullName)
// //Q7
// var city = "Hyderabad";
// document.write("City: "+city+"<br> After Replacement: "+ city.replace("Hyder","Islam"))
// //Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("After Replacement: "+ message.replace(/and/g,"&"))
// //Q9
// var value = "472";
// document.write("Value: "+value+ "<br> Type: "+ typeof(value)+"<br>")
// var val = parseInt(value)
// document.write("Value: "+val+ "<br> Type: "+ typeof(val))
// //Q10
// var inp = "peanuts";
// document.write("User input: "+inp + "<br> Upper case : "+inp.toUpperCase())
// //Q11
// var inp = "javascript";
// document.write("User input: "+inp + "<br> Titled case : "+inp[0].toUpperCase()+inp.slice(1))
// //Q12
// var num = 35.36 ;
// document.write("Number: "+num+ "<br> Result: "+ num.toString().replace(".",""))
// //Q13
// var uname = prompt("Enter your character");
// document.write(uname + "<br>");
// for (var i = 0; i < uname.length; i++) {
//     var ch = uname.charCodeAt(i);
//     if (ch == 33 || ch == 44 || ch == 46 || ch == 64) {
//         document.write("enter a valid username.")
//         break;
//     }
// }
// //Q14
// var a = ["cake", 'apple pie', 'cookie', "chips", "patties"]
// var s = prompt("What do you want to search? ")
// s= s.toLowerCase();
// for (var i = 0; i < a.length; i++) {

//     if (s == a[i]) {
//         document.write(s + " is <b>availaible</b> at index " + i + " in our bakery <br>")
//         break;

//     }
// }
// if (s != a[i]) {
//     document.write("We are Sorry. " + s + " is <b> not availaible</b> in our bakery <br>")
// }
// //Q15
// var pass = prompt("Enter Password")
// for (var i = 0; i < pass.length; i++) {
//     var ch = pass.charCodeAt(i);
//     var cha = pass.charCodeAt(0);
//     if (ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 48 && ch <= 57) {

//         if (cha >= 48 && cha <= 57) {
//             document.write("It should not start with a number")
//             break;

//         } 
//         else  if (pass.length > 6) {
//             document.write("Sucess")
//             break;
//         }
//         else {
//             document.write("It must at least 6 characters long")
//             break;


//         }
//     }

//     else {
//         document.write("It should only contain alphabets and numbers")
//         break;
//     }
// }
// //Q16
// var university = "University of Karachi";
// for(var i =0 ; i<university.length ; i++){
//     document.write(university[i].split() + "<br>")
// }
// //Q17
// var str = prompt("Enter your input");
// document.write("String: "+str + "<br>Last Character of input is  : "+ str[str.length-1] );
// //Q18
// var mes = "The quick brown fox jumps over the lazy dog";
// mes = mes.toLowerCase();
// document.write( "Text "+mes +"<br>There are " + mes.match(/the/g).length + " occurence of word 'the'")

// --------------- chapter # 26-30 ---------------
// //Q1
// var num = +prompt("Enter your positive integer");
// document.write("Number : " + num + "<br> Round off : "+ Math.round(num) + "<br> Floor: "+Math.floor(num) + "<br> Ceil: "+Math.ceil(num)+ "<br>" )
// // //Q2
// var num = -parseFloat(prompt("Enter your positive integer"));
// document.write("Number : " + num + "<br> Round off : "+ Math.round(num) + "<br> Floor: "+Math.floor(num) + "<br> Ceil: "+Math.ceil(num)+ "<br>" )
// //Q3
// var num = prompt("Enter your positive integer");
// document.write("The absolute value of " +num + " is " + Math.abs(num) + "<br>" )
// //Q4
// var dice = Math.random(dice) * 9;
// document.write( "Random Dice Value: " +Math.floor(dice) +"<br>")
// //Q5
// var dice = Math.random(dice) * 2;
// dice = Math.floor(dice);
// if (dice == 1){
//     document.write(dice+"<br> Random Dice Value: Head")
// }
// else if (dice == 0){
//     document.write(dice+ "<br> Random Dice Value: Tails")
// }
// //Q6
// var dice = Math.random(dice) * 100;
// document.write(" random number between 1 and 100: "  +Math.floor(dice) )
// //Q7
// var input = parseFloat(prompt("Enter your weight in kilograms "))
// document.write(input+"Kilograms")
// //Q8
// var guess = +prompt("Enter number from 1 to 10")
// var dice = Math.random(dice) * 11;
// dice = Math.floor(dice);
// document.write(" random number is "  + dice +"<br>" )
// document.write(" you guess "  +guess +"<br>" )
// if (guess == dice){
//     document.write("Congratx u guess the right number")
// }
// else{
//     document.write("Try again")
// }

// --------------- chapter # 31-34 ---------------
// //Q1
// var date = new Date()
// document.write(date)
// //Q2
// var date = new Date()
// mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// document.write("Current Month: "+mlist[date.getMonth()])
// //Q3
// var date = new Date()
// mlist = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// document.write("Today is "+mlist[date.getDay()].slice(0,3))
// //Q4
// var date = new Date()
// mlist = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// var day = mlist[date.getDay()];
// if ( day === "Saturday" || day === "Sunday"){
//     document.write("Its Funday")
// }
// //Q5
// var date = new Date()
// var d = date.getDate()
// if ( d < 16){
//     document.write("First fifteen days of the month")
// }
// else if (d >= 16 ){
//     document.write("Last days of the month")
// }
// //Q6
// var date = new Date()
// document.write( "Current Date: "+date + "<br>")
// document.write( "Elapsed milliseconds since January 1, 1970 : "+date.getTime() + "<br>")
// document.write( "Elapsed minutes since January 1, 1970 : "+date.getTime()/(1000*60) + "<br>")
// //Q7
// var date = new Date()
// var h = date.getHours()
// if (h < 13){
//     document.write("Its AM")
// }
// else{
//     document.write("Its PM")
// }
// //Q8
// var date = new Date("Dec 31, 2020")
// document.write("Later date : "+date)
// //Q9
// var d = new Date("Jan 15, 2021");
// var t = new Date();
// var diff = t.getTime() - d.getTime();
// document.write("DAYS PASSED SINCE YOUR BDAYS ARE:  "+ Math.floor( diff / (1000 * 60 * 60 * 24)) + "<br>")
// //Q10
// var d = new Date("Jan 1, 2021");
// var t = new Date("Jan 15, 2021");
// var diff = t.getTime() - d.getTime();
// document.write("Reference Day : "+t+"<br>")
// document.write("SECONDS PASSED FROM THE START OF THE YEAR TO YOUR BDAY :  "+ Math.floor( diff / (1000 * 60 )) + "<br>")
// //Q11
// var date = new Date()
// document.write("Current Date : "+ date + "<br>")
// var h = date.getHours()-1;
// date.setHours(h)
// document.write("1 hour ago " +date )
// //Q12
// var date = new Date()
// document.write("Current Date : "+ date + "<br>")
// var y = date.getFullYear()-100;
// date.setFullYear(y)
// document.write("100 year back ! it was, " +date )
// //Q13
// var age = prompt("Enter Your age ");
// var date = new Date()
// var y = date.getFullYear()-age;
// document.write("Your age is : "+age +"<br>")
// document.write("Your birth year is : "+y)
// //Q14
// document.write(" <h1> K-ELECTRIC BILL:  </h1> <br> ")
// var date = new Date()
// var cname = "Dhara"
// document.write("Customer Name : "+cname+"<br>")
// mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var mon = mlist[date.getMonth()];
// document.write("Current Month : "+mon+"<br>")
// var unit = 410;
// document.write("Number of unit : "+unit+"<br>")
// var perUnit = 16;
// document.write("Charge per unit : "+perUnit+"<br> <br>")
// var net = unit * perUnit;
// document.write("Net Amount Payable (within Due Date): " + net+"<br>") 
// var late = 350;
// document.write("Late Payment Charges : "+late+"<br>")
// document.write("& Gross Amount Payable (after Due Date): "+ ( net + late ) ) 

// --------------- chapter # 35-38 ---------------
// //Q1
// function dt(){
// var date = new Date()
// document.write(date)
// }
// dt()
// //Q2
// function fn() {
//     var fn = prompt("Enter your first name")
//     var ln = prompt("Enter your last name")
//     var fullName = fn + ln;
//     alert("Welcome " + fullName)
// }
// fn()
// //Q3
// function add() {
//     var fn = +prompt("Enter your first name")
//     var sn = +prompt("Enter your last name")
//     return fn + sn;

// }
// document.write(add())
// //Q4
// function calc(num1, op, num2) {
//     if (op == '+') {
//         return num1 + num2;
//     }
//     else
//         if (op == '-') {
//             return num1 - num2;
//         }
//         else
//             if (op == '*') {
//                 return num1 * num2;
//             }
//             else
//                 if (op == '/') {
//                     return num1 / num2;
//                 } else
//                     if (op == '%') {
//                         return num1 % num2;
//                     }
//                     else {
//                         return 'Wrong input'
//                     }
// }
// document.write(calc(2, '/', 8))
// //Q5
// function sqr(num){
//     return Math.pow(num , 2);
// }
// document.write(sqr(6))
// //Q6
// function fact(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return num;
//   }
// document.write(fact(5));
// //Q7
// function count(){
// var n1 = prompt("Enter Start number ")
// var n2 = prompt("Enter Ending number ")
// for (var i = n1 ; i <= n2 ; i++){
//     document.write(i + "<br>")
// }
// }
// count()
// //Q8
// var hyp;
// var base = prompt("base: ") 
// var perp = prompt("Perpendicular : ")
// function calculateSquare(num) {
//     return Math.pow(num, 2);
// }
// function calculateHypotenuse() {
//     base = calculateSquare(base)
//     perp = calculateSquare(perp)
//     hyp = Math.sqrt(base + perp);
//     return hyp;
// }
// document.write(calculateHypotenuse())
// //Q9
// function area (w,h){
//     var a = w * h;
//     return a;
// }
// document.write(area(2,2))
// //Q10
// function palindrone(word){
// var check = "";
// for (var i = word.length - 1; i >= 0; i--) {
//     check = check + word[i];
// }
// if (check === word) {
//     return word + " is a palindrone word";
// }
// else {
//     return word + " is not palindrone";
// }
// }
// document.write(palindrone("civic"))
// document.write("<br>")
// document.write(palindrone("dhara"))
// //Q11
// function cap(str){
//     str = str.split(" ")
//     for (var i = 0 ; i < str.length ; i++ ){
//         str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    
//     }
//     return (str.join(" "));
    
// }
// document.write(cap("the quick brown fox"))
// //Q12
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
//   document.write(longestWord("Web Development Tutorial"));
// //Q13
// function occurence(str,let){
//     return "String : "+str +"<br> Seraching letter: " + let +" <br>There are " + str.match(let).length + " occurence of letter " + let +")";
// }
// document.write(occurence("JSResourceS.com","o"))
// //Q14
// function calcCircumference(r){
//     var c = 2 * Math.PI * r;
//     return "The circumference is" + c;
// }
// function calcArea(r){
//     var a =Math.PI * Math.pow(r,2);
//      return "The area is " + a;
// }
// document.write(calcCircumference(3))
// document.write("<br>")
// document.write(calcArea(3))