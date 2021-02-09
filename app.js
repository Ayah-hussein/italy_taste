console.log('class 04');

var name = prompt ("type your name please :");
var ask = prompt ("what is the best italian dish for you?");
var choose = prompt ("enter number of dishes? ");

console.log('Your name is:' + name);
console.log('Your best italian dish is:' + ask);
document.write('<p>Your name IS : '+ name + ' , ' + ' and Your favorite dish is : '+ ask +  '</p>' );

if (choose == false) 
{
   console.log ("you don't enter number of dishes");
    document.write("<h1> you don't enter number of dishes</h1>");
} 
else
{
     console.log('you orderd ' + choose + 'dishes');
  

}

var order= prompt ("do you want pizza or Pasta?");

while (order !== "pasta" && order !== "pizza")
{

    order= prompt("do you want pizza or Pasta?");
}
var itemOrder ='';
if (order == "pasta"){

itemOrder ='<img src="complete meals italian21765.jpg">'; 
}
else if (order == "pizza"){

    itemOrder= '<img src="download.jpg"/>';
}

function nameUser () {
   var name = prompt ("type your name please :");
   console.log (name);

}

function order(){
  
var order= prompt ("do you want pizza or Pasta?");

console.log ('Your dish is : ' + order );

}