function triangulo(){
    let num1= Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    let res= (num1*num2)/2;
    document.getElementById('res').value=res;
}   
function cuadrado(){
    let L1= Number(document.getElementById('n3').value);
    let res= L1*L1;
    document.getElementById('res1').value=res; 
}
function rectangulo(){ 
    let base1= Number(document.getElementById('n4').value);
    let altura2=Number(document.getElementById('n5').value);
    let res= base1*altura2;
    document.getElementById('res2').value=res;
}
function circulo(){
    let num1= Number(document.getElementById('n6').value);
    let b=num1*num1;
    let res= b*3.1416;
    document.getElementById('res3').value=res;
}