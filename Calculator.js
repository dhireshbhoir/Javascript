var num3;
function add(){
  num1 = document.getElementById("firstno").value;
  num2 = document.getElementById("secondno").value;
  num3 = parseInt(num1) + parseInt(num2);
  
}
function sub(){
  num1 = document.getElementById("firstno").value;
  num2 = document.getElementById("secondno").value;
  num3 = parseInt(num1) - parseInt(num2);
  
}
function mul(){
  num1 = document.getElementById("firstno").value;
  num2 = document.getElementById("secondno").value;
  num3 = parseInt(num1) * parseInt(num2);
  
}
function div(){
  num1 = document.getElementById("firstno").value;
  num2 = document.getElementById("secondno").value;
  num3 = parseInt(num1) / parseInt(num2);
 
}
function calculate(){
  document.getElementById("result").value=num3;
}
