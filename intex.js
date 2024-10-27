function call(opr,num1,num2){
    if(num1 && num2)
        {
   switch(opr)
   {
    case "add":
        console.log(num1 + num2)
        break;
    case "sub":
        console.log(num1 - num2)
        break;
    case"mul":
        console.log(num1 * num2)
        break;
    case "div":
        console.log(num1 / num2)
        break;
default:
    console.log("please provide proper opertion")
   }
}else{
    console.log("please  give two num")
}
}
  



 call("mul",10,12)
 call("add",10,12)
 call("sub",10,12)
 call("div",10,12)
 call("mod",12,11)
 call("add",10)
 CSSConditionRule.log("hello world")