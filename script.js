var clickButton= document.getElementById("button");
clickButton.addEventListener("click",function(event){
    var body=document.getElementById("all");
    body.style.display="none";
    var body1=document.getElementById("nextpart");
    body1.style.display="block";
})
//deposit button event handler
var clickDepoButton= document.getElementById("button_depo");
clickDepoButton.addEventListener("click",function(event){
var depo=document.getElementById("depo_form").value;
depoNumber=parseFloat(depo);

var depo1=document.getElementById("depo_update").innerText;
depoNumber1=parseFloat(depo1);
var totalDepo=depoNumber1+depoNumber;
document.getElementById("depo_update").innerText=totalDepo;
//balance handler
var currentBalance=document.getElementById("balance_edit").innerText;
currentBalance=parseFloat(currentBalance);
//console.log(currentBalance);
newBalance=depoNumber+currentBalance;
document.getElementById("balance_edit").innerText=newBalance;
document.getElementById("depo_form").value="";
})

//withdraw button event handler
var clickWithdraw=document.getElementById("button_withdraw").addEventListener("click",function(event){
var withdrawValue=document.getElementById("withdraw_form").value;
var withdrawValue=parseFloat(withdrawValue);
var withdrawTableValue=document.getElementById("withdraw_table").innerText;
//var withdrawTableValue=document.getElementById("withdraw_table").innerText;
withdrawTableValue=parseFloat(withdrawTableValue);
//console.log(withdrawTableValue);
var totalWithdraw=withdrawValue+withdrawTableValue;
document.getElementById("withdraw_table").innerText=totalWithdraw;
//balance part
var Balance=document.getElementById("balance_edit").innerText;
Balance=parseFloat(Balance);
newBalance1=Balance-withdrawValue;
document.getElementById("balance_edit").innerText=newBalance1;
document.getElementById("withdraw_form").value="";
})
