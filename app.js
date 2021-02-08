var order= prompt ("do you want pizza or Pasta?");

while (order !== "pasta" && order !== "pizza")
{

    order= prompt("do you want pizza or Pasta?");
}
var itemorder ='';
if (order == "pasta"){

itemorder ='<img src="complete meals italian21765.jpg">'; 
}
else if (order == "pizza"){

    itemorder= '<img src="download.jpg"/>';
}


