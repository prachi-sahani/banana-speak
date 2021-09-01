var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");
var result;
var url = "https://api.funtranslations.com/translate/minion.json";
// var url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'
// console.log(btnTranslate);
function clickEventhandler() {
  btnTranslate.innerHTML = 'Translating...';
  output.innerHTML = '';
  fetch(getTranslationUrl(txtInput.value))
    .then((response) =>  response.json())
    .then((json) => {
      btnTranslate.innerHTML = 'Translate'

      if (json.success) {
        output.innerHTML = json.contents.translated;

      }
      else{
          throw json.error
      }
    })
    .catch(errorHandler);
}

function getTranslationUrl(text){
      return `${url}?text=${text}`
}

function errorHandler(error) {
  console.log("error occured: ", error);
  alert(error.message);
}
btnTranslate.addEventListener("click", clickEventhandler);
