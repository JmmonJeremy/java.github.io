// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);

// *** Activity #1 ************************************************************************************************** */

// My .forEach function to loop over an array and output it's contents in a <ul>
function postList (list, id) {
    list.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        document.querySelector(id).appendChild(li);
    }) 
};

postList(myInfo.hobbies, "#hobbies")
// Teachers solution with .forEach
const foodsElement = document.querySelector('#favorite-foods');
function createAndAppendFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  foodsElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(createAndAppendFoodItem);
// My .map function to loop over an array and output it's contents in a <ul> 
let hobbyPost = document.querySelector("#hobbies");

const createList = function (item) {
    return `<li>${item}</li>`;
}

let theElements = myInfo.hobbies.map(createList);
console.log(theElements);
// This works with just = but it erases all prior data
hobbyPost.innerHTML += theElements.join("");
// Teacher's solution with .map
const foodsElement1 = document.querySelector('#favorite-foods');
function mapFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  return favoriteFood;
}
// this function could also be written this way using a template literal:
function mapFoodItemSmall(food) {
  return `<li>${food}</li>`;
}
const foodElements = myInfo.favoriteFoods.map(mapFoodItem);
console.log(foodElements);
foodElements.forEach(element => {
    foodsElement1.appendChild(element);
})
const foodListElements = myInfo.favoriteFoods.map(mapFoodItemSmall);
console.log(foodListElements);
// we need to flatten the array of strings into one big string. .join does this. * This works but erases all prior items
foodsElement1.innerHTML += foodListElements.join('');

// *** Activity #2 ************************************************************************************************ */
// Teacher's Teaching The map example could be simplified as below:
const foodsElement2 = document.querySelector("#favorite-foods");
const foodListElements2 = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// we need to flatten the array of strings into one big string. .join does this. (I added the +)
foodsElement.innerHTML += foodListElements.join("");
// OR we could in fact simplify this down to one line! (I added the +)
document.querySelector("#favorite-foods").innerHTML += myInfo.favoriteFoods
  .map((food) => `<li>${food}</li>`).join("");

// *** Activity #3 ************************************************************************************************ */
// My function to make a li string to use
function stringLi(item) {
    return `<li>${item}</li>`;
};
// My function to make a dt and dd string to use
const stringDtDd = function (item) {
    return `<dt>${item.place}</dt><dd>${item.length}</dd>`
}
// My function to embed the strings in the HTML
const embedString = (list, string, id) => {   
    document.querySelector(id).innerHTML = list.map(string).join("");
};

embedString(myInfo.favoriteFoods, stringLi, "#favorite-foods");
embedString(myInfo.hobbies, stringLi, "#hobbies");
embedString(myInfo.placesLived, stringDtDd, "#places-lived");

// Teacher's solutions 
// reusable!
myInfo2 = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  const foodsElement3 = document.querySelector("#favorite-foods");
  const placesElement = document.querySelector("#places-lived");
  // requires a list, and a callback that will produce an html string for each item in the list
  // returns a string of html
  function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
  }
  // requires an food string
  // returns that string embedded in HTML markup
  function foodsTemplate(food) {
    return `<li>${food}</li>`;
  }
  
  // requires an place string
  // returns that string embedded in HTML markup
  function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }
  
  foodsElement3.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
  );
  placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
  );


