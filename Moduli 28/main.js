var buttonation = document.getElementById("hyu");

buttonation.onclick = function(){
    alert("You've been scammed!Send another 500$ to get your files back")
}

var buttonation2 = document.getElementById("hyuyu");
var buttonation3 = document.getElementById("hyuyuy");
var buttonation4 = document.getElementById("hyuyuyu");

var buttonation1 = document.querySelector("#hyuy")
buttonation1.addEventListener ('click', function(){
    alert("You've been scammed!Send another 500$ to get your files back")
})

buttonation2.onmouseover = function(){
    alert("Alertay")
}

buttonation3.onmouseleave = function(){
    alert("Alertay")
}

buttonation4.onmousewheel = function(){
    alert("Alertay")
}

var btn1 = document.getElementById("bt1");
var btn2 = document.getElementById("bt2");
var text = document.getElementById("txt1");
var txt2 = document.getElementById("txt2");

btn1.onclick = function(){
    text.style.color = "#c7c7c7";
    text.style.textAlign = "center";
    text.style.backgroundColor = "#d4d4e5";
    text.style.fontSize = "200px";
    txt2.setAttribute("class", "txt2")
}

btn2.onclick = function(){
    txt1.setAttribute("class","txt1")
}