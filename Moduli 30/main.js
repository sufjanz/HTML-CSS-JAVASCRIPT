x=5;
if (x>2){
    console.log("number is greater than 2")
}else {
    console.log("number is not greater than 2")
}

var input = document.getElementById('input')
var button = document.getElementById('btn')
var text = document.getElementById('text')

button.onclick = function(){
    text.innerHTML = input.value
}

var input1=document.querySelector('#input1');
var input2=document.querySelector('#input2');
var sum=document.querySelector('#btn1');
var result=document.querySelector('#result');


sum.onclick = function(){
    result.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}
