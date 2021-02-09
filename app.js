console.log('class 04');

var name = prompt ("type your name please :");
var ask = prompt ("what is the best italian dish for you?");
var choose = prompt ("choose food");

console.log('your name is:' + name);
console.log('your best italian dish is:' + ask);
document.write('<p>your name:'+ name +',' + 'your favorite dish'+ ask +  '</p>' );

if (choose == false) 
{
   console.log ("you don't select a food");
//    document.write("<h1> you don't select a food</h1>");

} 
else
{
     console.log('the price for this dish is 20$');
     document.write("the price for this dish is 20$");

}
