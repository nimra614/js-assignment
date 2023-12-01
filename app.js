let input1 = document.getElementById('inp1')
let input2 = document.getElementById('inp2')
let p = document.getElementById('para')

function sum(){
 let sum = Number(input1.value) + Number(input2.value)
 p.innerHTML = sum;
 input1.value = ""
 input2.value = ""

} 

function sub(){
 let sub = Number(input1.value) - Number(input2.value)
 p.innerHTML = sub;
 input1.value = ""
 input2.value = ""

}


function mul(){
 let mul = Number(input1.value) * Number(input2.value)
 p.innerHTML = mul;
 input1.value = ""
 input2.value = ""

}


function div(){
 let div = Number(input1.value) / Number(input2.value)
 p.innerHTML = div;
 input1.value = ""
 input2.value = ""

}


function mod(){
 let mod = Number(input1.value) % Number(input2.value)
 p.innerHTML = mod;
 input1.value = ""
 input2.value = ""

}