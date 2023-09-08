var num;
var opr;
function EnterClear(){
    document.getElementById("Answer").value=""
}
function EnterNumber(num){
    document.getElementById("Answer").value +=num
}
function EnterOperator(opr){
    document.getElementById("Answer").value +=opr
}
function EnterEqual(){
    var ans=eval(document.getElementById("Answer").value)
    document.getElementById("Answer").value=ans
}