var button1 = document.querySelector("button");
button1.addEventListener("click",function(){
    var value1 = document.querySelector("input").value;
    var value2 = (value1*1.8)+32;
    value2 = value2.toFixed(2);
    console.log(value2);
    document.querySelector("span").innerHTML = value2;
});





