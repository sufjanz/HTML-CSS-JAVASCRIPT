// // // var text="The most famous school is Digital School";
// // // var result=text.search("Digital School");

// // // document.getElementById('rezultati1').innerHTML = result;

// // // var text="The most famous school is Digital School";
// // // var result=text.replace(/Digital School/, "Ismajl Qemali");

// // // document.getElementById('rezultati2').innerHTML = result;

// // // var text ="jorareissufjanlumidrini";
// // // var regex = new  RegExp('reissu')
// // // document.getElementById('rezultati3').innerHTML = regex.test(text);

// // // var text="My school is the best school of all school";
// // // var regex = /school/g;

// // // document.getElementById('rezultati4').innerHTML = text.match(regex);

// // // var text="My school is the best school of all school";
// // // var regex = /s/g;

// // // document.getElementById('rezultati4').innerHTML = text.match(regex);

// // // var text="My school is the best school of all school";
// // // var regex = /[sol]/g;

// // // document.getElementById('rezultati5').innerHTML = text.match(regex);

// // var text="My school is the best school of all school 10";
// // var regex = /[0-9]/g;

// // document.getElementById('rezultati6').innerHTML = text.match(regex);

// // var text="My school is the best school of all school 10";
// // var regex = /\s/g;

// // document.getElementById('rezultati6').innerHTML = text.match(regex);

// // //

var text = "hello helloo hellooo helloooo hellooooo";
var regex=/o{3,5}/g;
document.getElementById('rezultati6').innerHTML = text.match(regex);
