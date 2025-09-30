var jora = () => alert("jora lumi");
jora();

function toSeconds(number1){
    return number1*60 ;
}
console.log(toSeconds(3));

var makina= {emri:"Opel", viti: 2011, kilometrazha: 246923, startEngine: function(){alert("VROOOOOM!")}
}
var shkolla= {emri:"Shkolla Muharrem Fejza",
      viti: 1998, nxensit: 2200,
      drejtori: "Shpend Ahmeti"
    }

console.log(makina.emri);
console.log(shkolla.drejtori);

makina.startEngine();

var computer = new Object();

computer.name="Lenovo ";
computer.cpu="Intel Core i7 ";
computer.gpu="Geforce 4080 ";

computer.type = function(){
    return this.name+this.cpu+this.gpu;
}

console.log(computer.type());

