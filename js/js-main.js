//Inserts the digits
function insert(val){
    var num=document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML= num + val;
}
//clears the digits
function cle(){
    document.getElementById('result').innerHTML="";
}

//Decreases 1 digit
function back(){
    var result= document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML= result.substring(0,result.length-1);
}

//Excecutes the operations
function calc(){
    var result= document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML=eval(result);
    }
}