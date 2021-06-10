function mp() {
    var input=[];
    for ( i = 1;i<=6;  i++) {
       input.push(document.getElementById("i"+i).value);
        
    }
    document.getElementById("sp").innerHTML=input.join(".!!!!!");
}