var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var output = document.querySelector('#output');
// console.log(btnTranslate); 
function clickEventhandler(){
    output.innerHTML = 'hello ' + txtInput.value
}
btnTranslate.addEventListener('click', clickEventhandler)


