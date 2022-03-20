// main.js
//const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;
// takes a fetch response and checks to make sure it was OK.
// then returns the body of the response as a PROMISE to some JSON.
function convertToJson(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error:", response);
  }
}
// this is where we would do whatever we needed to do with the resulting data.
function doStuff(data) {
  results = data;
  console.log("first: ", results);
  // Display on web page
  const html = 
    `<h2>${results.name}</h2>   
    <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    document.querySelector("#output").innerHTML = html;
}
// sort list alphabetically
function compare(a, b) {
    if(a.name < b.name) {
        return -1;
    }
    if(a.name > b.name) {
        return 1;
    }
     // a must be equal to b
    return 0;  
}
function sortPokemon(list) {
    let sorted_list = list.sort(compare);
    return sorted_list;
}
// function to display a list
function doStuffList(data) {
    results = data;
    console.log("first: ", results);
    let pokeList = data.results;
    pokeList = sortPokemon(pokeList);    
    let pokemen = document.querySelector("#outputList");    
    pokeList.forEach(pokeman => {
    let li = document.createElement("li");
    li.textContent = pokeman.name; 
    pokemen.append(li);
    });
}
// read this as: make a request to URL, WHEN it finishes THEN run convertToJson
// WHEN it finishes THEN run doStuff
//fetch(url).then(convertToJson).then(doStuff);
fetch(url).then(convertToJson).then(doStuffList);
// meanwhile...continue with the rest of the program...
console.log("second: ", results);