// // $(window).ready(function(){

// //     alert("JQuery is working!");
// // })

// $('#header').css('color', 'red');
// $('li');
// $('ul li');
// $('.student')

// $('a.test:first')
// $('tr:odd');
// $('#myForm :input');
// $('div:visible');
// $('div:gt(2)');
// $('div:animated')

$('li').click(function(){
    alert('clicked')
})

$('btn1').click(function(){
    console.log($('#h1').text());
    $('#h1').text('New Text Set by jQuery');
    $('#h1').append('<h2>Appendedtext</h2>');
})