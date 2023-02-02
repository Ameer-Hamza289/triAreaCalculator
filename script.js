function calculate(){
    var a=document.getElementById("first-side").value;
    var b=document.getElementById("second-side").value;
    var c=document.getElementById("third-side").value;
    var p=((+a)+(+b)+(+c))/2;
    var r=p*(p-(+a))*(p-(+b))*(p-(+c));
    var result=Math.sqrt(r);
    document.getElementById("result").innerHTML=result; 
}