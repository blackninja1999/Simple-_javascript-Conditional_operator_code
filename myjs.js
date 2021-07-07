var firstname=prompt("First name: ")
var lastname=prompt("last name: ")
var height=prompt("What is your height: ")
var age= prompt("How old are you? ")
var petname=prompt("What is your pet name: ")
alert("Thank you so much for the information")

var nameCond=null;

var ageCond=null;
var heightCond= null;
var petCond=null;

if (firstname[0]==lastname[0]){
  nameCond=true
}
else {
  nameCond=false
}
if (age >20 && age<30){
  ageCond=true
}
else {
  ageCond=false;
}
if (height>=170){
  heightCond=true;

}
else{
  heightCond=false;
}

if (petname[petname.length-1]==="y"){
  petCond=true
}
else {
  petCond=false
}

if (nameCond && ageCond && heightCond && petCond){
  console.log("Welcome Spy!");
}
else{
  console.log("Nothing to see here");
}
