let input1 = document.getElementById('inp1')
let input2 = document.getElementById('inp2')
let p = document.getElementById('para')

function abc(){
let sum =  Number(input1.value) + Number(input2.value)
// console.log(sum)
p.innerHTML = sum


input1.value = ""
input2.value = ""
}
