  function na()
  {
  	var N1= document.getElementById("name").value;
    localStorage.setItem("Name", N1);
    console.log(localStorage.getItem('Name')); 
   }
function nam()
{
	document.getElementById("person").innerHTML=localStorage.getItem('Name');
	console.log(person);
}
function ans()
{

var	a=[
'It is certain',
'It is decidedly so',
'Reply hazy try again',
'Cannot predict now',
'Do not count on it',
'My sources say no',
'Outlook not so good',
'Signs point to yes']
var x = Math.floor(Math.random()*8);
if (document.getElementById("question").value==0) 
{
  alert("Select a question!");
}
else
{
document.getElementById("disp").innerHTML=a[x];

document.getElementById("h").style.visibility='visible';
}
}