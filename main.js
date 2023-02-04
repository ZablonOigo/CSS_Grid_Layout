document.getElementById('number').addEventListener('input',((e)=>{
let amount=e.target.value;
document.querySelector('.output-1').innerHTML=Math.floor(amount/124);
document.querySelector('.output-2').innerHTML=Math.floor(amount/135);
document.querySelector('.output-3').innerHTML=Math.floor(amount/18);
document.querySelector('.output-4').innerHTML=Math.floor(amount/96);
document.querySelector('.output-5').innerHTML=Math.floor(amount/1);
document.querySelector('.output-6').innerHTML=Math.floor(amount/29);
document.querySelector('.output-7').innerHTML=Math.floor(amount/18);
document.querySelector('.output-8').innerHTML=Math.floor(amount/3);
document.querySelector('.output-9').innerHTML=Math.floor(amount/9);
}))