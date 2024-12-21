var n =Math.random();
n=n*6
var randomNumber1=Math.floor(n+1);
console.log(randomNumber1);
var randomImg= "dice"+randomNumber1+".png"
var randomsrc="images/"+randomImg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImg);

var m =Math.random();
m=m*6
var randomNumber2=Math.floor(m+1);
var randomImg2= "dice"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);