let pic0=document.getElementById('pic0');
let pic1=document.getElementById('pic1');
let pic2=document.getElementById('pic2');
let pic3=document.getElementById('pic3');
let pic4=document.getElementById('pic4');
let pic=document.getElementById('pic');
let container=document.querySelector('.container');
function change(src){
    pic.src=src;

}
function colors(color){
    container.style.background=color;

}