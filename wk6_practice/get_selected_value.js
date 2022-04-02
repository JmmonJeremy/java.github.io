var select = document.getElementById('language');
var value = select.options[select.selectedIndex].value;
console.log(value); // en

let text = select.options[select.selectedIndex].text;
console.log(text); // English

function getMeal() {
let select = document.getElementById('language');
let value = select.options[select.selectedIndex].value;
console.log(value); // en
return value;
}
document.querySelector("#language").addEventListener("click" , getMeal);