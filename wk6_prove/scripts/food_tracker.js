// food_tracker.js
// creates a list to hold the foods
let bFoods = [], lFoods = [], dFoods = [], sFoods = [], gFoods = [];

// set meal and foods [] variable default values to use for differnt meal lists
let meal = "#goal";
console.log(quantity);
let foods = [];
foods = sFoods;

// use that variable to set id according to a click
document.getElementById('meal_category').addEventListener('change', function() {
    //console.log('You selected: ', this.value);  // used to help debug
    if (this.value == "breakfast") {
        meal = "#breakfast";
        document.querySelector(meal).addEventListener("click" , manageFoods);
        foods = bFoods;           
    };
    if (this.value == "lunch") {
        meal = "#lunch";
        document.querySelector(meal).addEventListener("click" , manageFoods);        
        foods = lFoods;        
    };
    if (this.value == "dinner") {
        meal = "#dinner";
        document.querySelector(meal).addEventListener("click" , manageFoods);
        foods = dFoods;      
    };
    if (this.value == "snack") {
        meal = "#snack";
        document.querySelector(meal).addEventListener("click" , manageFoods);
        foods = sFoods;       
    };
   
  });

renderFoods(foods, meal);

// function to put in the html code
function renderFoods(foods, meal) {
  if (meal == "#breakfast") {
     foods = bFoods;
  }
  if (meal == "#lunch") {
     foods = lFoods;
  }
  if (meal == "#dinner") {
     foods = dFoods;
  }
  if (meal == "#snack") {
     foods = sFoods;
  }
  // get the list element from the DOM
  let listElement = document.querySelector(meal);
  //console.log(listElement);  // used to help debug
  // loop through the foods array with .forEach to add the HTML markup for an added food
  // set variable for last in the list & only add it so we don't readd items to page
  let last = foods.length - 1;
  foods.forEach((food) => {
    if (food == foods[last]) {   
    listElement.innerHTML += `
    <dt>    
        <div class="together">
            <span data-function="delete">❎</span>
            <span class="not_e" data-function="listed">🟩</span>
            <span class="e xErase" data-function="eaten">✅</span>
        </div>
        <p class="together">${food.detail}</p>
    </dt>
    <dd>(<span class="numbers">${food.volume}</span> cal)</dd>`;
    };    
  });
};

// function to add new food item
function newFood() {  
  // get the value entered into the #food_item input
  const food = document.querySelector("#food_item").value;
  const amount = parseInt(document.querySelector("#quantity").value); 
  // add it to the foods array if it is not an empty value
  if (food != "" && meal != "#goal" && !isNaN(amount)) {
  foods.push({ detail: food, volume: amount});
  // render out the list.
  renderFoods(foods, meal);
  };
  totalCalories(bFoods, lFoods, dFoods, sFoods) 
}; 

// function to remove food item
function removeFood(foodElement) { 
  foods.forEach(food => console.log(food));
  //filter to remove the element from the foods array
  console.log(foodElement.childNodes[3].innerText)
  foods = foods.filter(
    (food) => food.detail != foodElement.childNodes[3].innerText);
  // remove the HTML element from the DOM
  foodElement.remove();
};

function removeAmount(foodElement) {
  //filter to remove the element from the foods array
  foods.forEach(food => console.log(food));
  console.log(foodElement);
  foods = foods.filter(
    (food) => food.amount != foodElement);
  // remove the HTML element from the DOM
  foodElement.remove();
}

// function to use the delete or eaten functions
function manageFoods(e) {
  // did they click the delete or eaten icon?
  //console.log(e.target);  // used to help debug
  // event.target will point to the actual icon clicked on. 
  // need to get the parents dt with element.closest() 
  const dad = e.target.closest("dt");
  const mom = dad.nextElementSibling;
  //console.log(dad);  // used to help debug 
  //console.log(mom);  // used to help debug 
  // because we added 'data-function="delete"' to each icon with a food
  // access the dataset property on our target through a couple of if statements
  // to decide whether to run removeFood or toggle classes of "listed", "eaten", & "mark"
  if (e.target.dataset.function === "delete") {
    removeFood(dad);
    removeAmount(mom);
  };
  if (e.target.dataset.function === "eaten") {    
    e.target.classList.toggle("xErase");
    e.target.previousElementSibling.classList.toggle("eErase");
    e.target.closest("dt").classList.toggle("mark_top");
    e.target.closest("dt").nextElementSibling.classList.toggle("mark_bttm");
    e.target.closest("dt").nextElementSibling.firstElementChild.classList.toggle("eaten");
    
  };
  if (e.target.dataset.function === "listed") {   
    e.target.closest("dt").classList.toggle("mark_top");
    e.target.closest("dt").nextElementSibling.classList.toggle("mark_bttm");
    e.target.closest("dt").nextElementSibling.firstElementChild.classList.toggle("eaten");
    e.target.classList.toggle("eErase");
    e.target.nextElementSibling.classList.toggle("xErase");   
  }
};

// attach listeners to the addItems button and the list then listen for a click
// if addItems is clicked then call 'newFood' function & if either icon is clicked call the 'manageFoods' function 
document.querySelector("#addItem").addEventListener("click", newFood);
document.querySelector(meal).addEventListener("click" , manageFoods);

// add event listeners and reactions to toggle meals as checked on unchecked
// set variables toaccess the span elements
let bOpen = document.querySelector("#b_open");
let bChkd = document.querySelector("#b_chkd");
let lOpen = document.querySelector("#l_open");
let lChkd = document.querySelector("#l_chkd");
let dOpen = document.querySelector("#d_open");
let dChkd = document.querySelector("#d_chkd");
let sOpen = document.querySelector("#s_open");
let sChkd = document.querySelector("#s_chkd");
// set up funciton to toggle classes that toggle unchecked and checked boxes for the meal headers
function toggleBoxes(idLoc1, idLoc2, classNm1, classNm2) { 
    idLoc1.classList.toggle(classNm1);
    idLoc2.classList.toggle(classNm2);
};
// set event listeners for clicking on the boxes of the meal headers that call the function for breakfast
bOpen.addEventListener("click" , () => { toggleBoxes(bOpen, bChkd, "m_open", "m_chkd")});
bChkd.addEventListener("click" , () => { toggleBoxes(bOpen, bChkd, "m_open", "m_chkd")});
// set event listeners for clicking on the boxes of the meal headers that call the function for lunch
lOpen.addEventListener("click" , () => { toggleBoxes(lOpen, lChkd, "m_open", "m_chkd")});
lChkd.addEventListener("click" , () => { toggleBoxes(lOpen, lChkd, "m_open", "m_chkd")});
// set event listeners for clicking on the boxes of the meal headers that call the function for dinner
dOpen.addEventListener("click" , () => { toggleBoxes(dOpen, dChkd, "m_open", "m_chkd")});
dChkd.addEventListener("click" , () => { toggleBoxes(dOpen, dChkd, "m_open", "m_chkd")});
// set event listeners for clicking on the boxes of the meal headers that call the function for snack
sOpen.addEventListener("click" , () => { toggleBoxes(sOpen, sChkd, "m_open", "m_chkd")});
sChkd.addEventListener("click" , () => { toggleBoxes(sOpen, sChkd, "m_open", "m_chkd")});

// ??? set up function to get the total calorie count for all foods planned  *** ??? glitch causing incorrect count ***
function totalCalories(list1, list2, list3, list4) {    
    let bTotal = list1.reduce((accumulator, current) => accumulator + current.volume, 0);
    console.log(list1);
    let lTotal = list2.reduce((accumulator, current) => accumulator + current.volume, 0);
    console.log(list2) 
    let dTotal = list3.reduce((accumulator, current) => accumulator + current.volume, 0);
    console.log(list3);
    let sTotal = list4.reduce((accumulator, current) => accumulator + current.volume, 0);
    console.log(list4)        
    let calorieTotal = bTotal + lTotal + dTotal + sTotal;
    console.log(calorieTotal)
    return calorieTotal;
};

// set up function to count the total calories for all food planned or eaten on screen
function totalScreen(eClass) {
    let myTot = []
    let cNumbers = document.querySelectorAll(eClass);
  cNumbers.forEach(number => {
      let num = (parseInt(number.innerHTML));
      myTot.push(num);   
  })
  console.log(myTot)
  let screenTotal = myTot.reduce((accumulator, current) => accumulator + current, 0);
  console.log(screenTotal)
  return screenTotal;
}

// add event listener and reaction to total calories for all planned foods on screen
document.querySelector("#total").addEventListener("click", () => {
    let displayCalories = totalScreen(".numbers");
    document.querySelector("#p_inner_output").innerHTML = "🍇Total calorie count: " + displayCalories + "🍇";
});

// add event listener and reaction to total calories for all eaten foods on screen
document.querySelector("#eTotal").addEventListener("click", () => {
    let displayCalories = totalScreen(".eaten");
    document.querySelector("#e_inner_output").innerHTML = "🍇Total calorie count: " + displayCalories + "🍇";
});

// set up function to count only planned foods within a meal when the meal checkbox is selected
function pTotalMeal(selection) {   
        let myTot = []
        let cNumbers = document.getElementById(selection).getElementsByClassName("numbers");
        console.log(cNumbers)
      for(let i = 0; i<cNumbers.length; i++) {
          let num = parseInt(cNumbers[i].innerHTML);
          myTot.push(num);
          console.log(num)
      }      
      let screenTotal = myTot.reduce((accumulator, current) => accumulator + current, 0);
      console.log(screenTotal)  
      return screenTotal;    
    };    
// add event listener and reaction to total calories for all planned breakfast foods
document.querySelector("#meal_total").addEventListener("click", () => {
    let displayMeals;
    // Just Breakfast
    if (bOpen.classList == "m_open" && lOpen.classList != "m_open" && dOpen.classList != "m_open" && sOpen.classList != "m_open")
    {
        displayMeals = pTotalMeal("breakfast");
        document.querySelector("#p_inner_output").innerHTML = "🍇Breakfast calories: " + displayMeals + "🍇"; 
    } 
    // Just Lunch
    else if (lOpen.classList == "m_open" && dOpen.classList != "m_open" && sOpen.classList != "m_open" && bOpen.classList != "m_open" ) 
    {    
        displayMeals = pTotalMeal("lunch");
        document.querySelector("#p_inner_output").innerHTML = "🍇Lunch calories: " + displayMeals + "🍇"; 
    } 
    // Just Dinner
    else if (dOpen.classList == "m_open" && sOpen.classList != "m_open" && bOpen.classList != "m_open" && lOpen.classList != "m_open") 
    {    
        displayMeals = pTotalMeal("dinner");
        document.querySelector("#p_inner_output").innerHTML = "🍇Dinner calories: " + displayMeals + "🍇"; 
    } 
    // Just Snacks
    else if (sOpen.classList == "m_open" && bOpen.classList != "m_open" && lOpen.classList != "m_open" && dOpen.classList != "m_open" ) 
    {    
        displayMeals = pTotalMeal("snack");
        document.querySelector("#p_inner_output").innerHTML = "🍇Snack calories: " + displayMeals + "🍇"; 
    }
    // Breakfast & Lunch 
    else if (bOpen.classList == "m_open" && lOpen.classList == "m_open" && dOpen.classList != "m_open" && sOpen.classList != "m_open") 
    {    
        displayMeals = pTotalMeal("breakfast") + pTotalMeal("lunch");
        document.querySelector("#p_inner_output").innerHTML = "🍇Breakfast & Lunch: " + displayMeals + "🍇"; 
    }
    // Breakfast & Dinner
    else if (bOpen.classList == "m_open" && lOpen.classList != "m_open" && dOpen.classList == "m_open" && sOpen.classList != "m_open") 
    {    
        displayMeals = pTotalMeal("breakfast") + pTotalMeal("dinner");
        document.querySelector("#p_inner_output").innerHTML = "🍇Breakfast & Dinner: " + displayMeals + "🍇"; 
    }
    // Breakfast & Snacks
    else if (bOpen.classList == "m_open" && lOpen.classList != "m_open" && dOpen.classList != "m_open" && sOpen.classList == "m_open") 
    {    
        displayMeals = pTotalMeal("breakfast") + pTotalMeal("snack");
        document.querySelector("#p_inner_output").innerHTML = "🍇Breakfast & Snacks: " + displayMeals + "🍇"; 
    }
    // Lunch & Dinner
    else if (lOpen.classList == "m_open" && dOpen.classList == "m_open" && sOpen.classList != "m_open" && bOpen.classList != "m_open" ) 
    {    
        displayMeals = pTotalMeal("lunch") + pTotalMeal("dinner");
        document.querySelector("#p_inner_output").innerHTML = "🍇Lunch & Dinner: " + displayMeals + "🍇"; 
    }
    // Lunch & Snacks
    else if (lOpen.classList == "m_open" && dOpen.classList != "m_open" && sOpen.classList == "m_open" && bOpen.classList != "m_open" ) 
    {    
        displayMeals = pTotalMeal("lunch") + pTotalMeal("snack");
        document.querySelector("#p_inner_output").innerHTML = "🍇Lunch & Snacks: " + displayMeals + "🍇"; 
    }
    // Dinner & Snacks
    else if (dOpen.classList == "m_open" && sOpen.classList == "m_open" && bOpen.classList != "m_open" && lOpen.classList != "m_open") 
    {    
        displayMeals = pTotalMeal("dinner") + pTotalMeal("snack");
        document.querySelector("#p_inner_output").innerHTML = "🍇Dinner & Snacks: " + displayMeals + "🍇"; 
    }
    // Breakfast, Lunch, & Dinner
    else if (bOpen.classList == "m_open" && lOpen.classList == "m_open" && dOpen.classList == "m_open" && sOpen.classList != "m_open") 
    {    
        displayMeals = pTotalMeal("breakfast") + pTotalMeal("lunch") + pTotalMeal("dinner");
        document.querySelector("#p_inner_output").innerHTML = "🍇B + L + D Calories: " + displayMeals + "🍇"; 
    }
    // Breakfast, Lunch, & Snacks
    else if (bOpen.classList == "m_open" && lOpen.classList == "m_open" && dOpen.classList != "m_open" && sOpen.classList == "m_open") 
    {    
        displayMeals = pTotalMeal("breakfast") + pTotalMeal("lunch") + pTotalMeal("snack");
        document.querySelector("#p_inner_output").innerHTML = "🍇B + L + S Calories: " + displayMeals + "🍇"; 
    }
    // Breakfast, Dinner, & Snacks
    else if (bOpen.classList == "m_open" && lOpen.classList != "m_open" && dOpen.classList == "m_open" && sOpen.classList == "m_open") 
    {    
        displayMeals = pTotalMeal("breakfast") + pTotalMeal("dinner") + pTotalMeal("snack");
        document.querySelector("#p_inner_output").innerHTML = "🍇B + D + S Calories: " + displayMeals + "🍇"; 
    }    
    // Lunch, Dinner, & Snacks
    else if (lOpen.classList == "m_open" && dOpen.classList == "m_open" && sOpen.classList == "m_open" && bOpen.classList != "m_open" ) 
    {    
        displayMeals = pTotalMeal("lunch") + pTotalMeal("dinner") + pTotalMeal("snack");
        document.querySelector("#p_inner_output").innerHTML = "🍇L + D + S Calories: " + displayMeals + "🍇"; 
    }
    // All Meals
    else if (bOpen.classList == "m_open" && lOpen.classList == "m_open" && dOpen.classList == "m_open" && sOpen.classList == "m_open") 
    {    
        displayMeals = pTotalMeal("breakfast") + pTotalMeal("lunch") + pTotalMeal("dinner") + pTotalMeal("snack");
        document.querySelector("#p_inner_output").innerHTML = "🍇All meals combined: " + displayMeals + "🍇"; 
    }
    else {
        document.querySelector("#p_inner_output").innerHTML = "🍇No Meal is Selected!!!🍇";   
    }
});

// set up function to count only eaten foods within a meal when the meal checkbox is selected
function eTotalMeal(selection) {   
    let myTot = []
    let cNumbers = document.getElementById(selection).getElementsByClassName("eaten");
    console.log(cNumbers)
  for(let i = 0; i<cNumbers.length; i++) {
      let num = parseInt(cNumbers[i].innerHTML);
      myTot.push(num);
      console.log(num)
  }      
  let screenTotal = myTot.reduce((accumulator, current) => accumulator + current, 0);
  console.log(screenTotal)  
  return screenTotal;    
};    
// add event listener and reaction to total calories for all planned breakfast foods
document.querySelector("#eMeal_total").addEventListener("click", () => {
let displayMeals;
// Just Breakfast
if (bOpen.classList == "m_open" && lOpen.classList != "m_open" && dOpen.classList != "m_open" && sOpen.classList != "m_open")
{
    displayMeals = eTotalMeal("breakfast");
    document.querySelector("#e_inner_output").innerHTML = "🍇Breakfast calories: " + displayMeals + "🍇"; 
} 
// Just Lunch
else if (lOpen.classList == "m_open" && dOpen.classList != "m_open" && sOpen.classList != "m_open" && bOpen.classList != "m_open" ) 
{    
    displayMeals = eTotalMeal("lunch");
    document.querySelector("#e_inner_output").innerHTML = "🍇Lunch calories: " + displayMeals + "🍇"; 
} 
// Just Dinner
else if (dOpen.classList == "m_open" && sOpen.classList != "m_open" && bOpen.classList != "m_open" && lOpen.classList != "m_open") 
{    
    displayMeals = eTotalMeal("dinner");
    document.querySelector("#e_inner_output").innerHTML = "🍇Dinner calories: " + displayMeals + "🍇"; 
} 
// Just Snacks
else if (sOpen.classList == "m_open" && bOpen.classList != "m_open" && lOpen.classList != "m_open" && dOpen.classList != "m_open" ) 
{    
    displayMeals = eTotalMeal("snack");
    document.querySelector("#e_inner_output").innerHTML = "🍇Snack calories: " + displayMeals + "🍇"; 
}
// Breakfast & Lunch 
else if (bOpen.classList == "m_open" && lOpen.classList == "m_open" && dOpen.classList != "m_open" && sOpen.classList != "m_open") 
{    
    displayMeals = eTotalMeal("breakfast") + eTotalMeal("lunch");
    document.querySelector("#e_inner_output").innerHTML = "🍇Breakfast & Lunch: " + displayMeals + "🍇"; 
}
// Breakfast & Dinner
else if (bOpen.classList == "m_open" && lOpen.classList != "m_open" && dOpen.classList == "m_open" && sOpen.classList != "m_open") 
{    
    displayMeals = eTotalMeal("breakfast") + eTotalMeal("dinner");
    document.querySelector("#e_inner_output").innerHTML = "🍇Breakfast & Dinner: " + displayMeals + "🍇"; 
}
// Breakfast & Snacks
else if (bOpen.classList == "m_open" && lOpen.classList != "m_open" && dOpen.classList != "m_open" && sOpen.classList == "m_open") 
{    
    displayMeals = eTotalMeal("breakfast") + eTotalMeal("snack");
    document.querySelector("#e_inner_output").innerHTML = "🍇Breakfast & Snacks: " + displayMeals + "🍇"; 
}
// Lunch & Dinner
else if (lOpen.classList == "m_open" && dOpen.classList == "m_open" && sOpen.classList != "m_open" && bOpen.classList != "m_open" ) 
{    
    displayMeals = eTotalMeal("lunch") + eTotalMeal("dinner");
    document.querySelector("#e_inner_output").innerHTML = "🍇Lunch & Dinner: " + displayMeals + "🍇"; 
}
// Lunch & Snacks
else if (lOpen.classList == "m_open" && dOpen.classList != "m_open" && sOpen.classList == "m_open" && bOpen.classList != "m_open" ) 
{    
    displayMeals = eTotalMeal("lunch") + eTotalMeal("snack");
    document.querySelector("#e_inner_output").innerHTML = "🍇Lunch & Snacks: " + displayMeals + "🍇"; 
}
// Dinner & Snacks
else if (dOpen.classList == "m_open" && sOpen.classList == "m_open" && bOpen.classList != "m_open" && lOpen.classList != "m_open") 
{    
    displayMeals = eTotalMeal("dinner") + eTotalMeal("snack");
    document.querySelector("#e_inner_output").innerHTML = "🍇Dinner & Snacks: " + displayMeals + "🍇"; 
}
// Breakfast, Lunch, & Dinner
else if (bOpen.classList == "m_open" && lOpen.classList == "m_open" && dOpen.classList == "m_open" && sOpen.classList != "m_open") 
{    
    displayMeals = eTotalMeal("breakfast") + eTotalMeal("lunch") + eTotalMeal("dinner");
    document.querySelector("#e_inner_output").innerHTML = "🍇B + L + D Calories: " + displayMeals + "🍇"; 
}
// Breakfast, Lunch, & Snacks
else if (bOpen.classList == "m_open" && lOpen.classList == "m_open" && dOpen.classList != "m_open" && sOpen.classList == "m_open") 
{    
    displayMeals = eTotalMeal("breakfast") + eTotalMeal("lunch") + eTotalMeal("snack");
    document.querySelector("#e_inner_output").innerHTML = "🍇B + L + S Calories: " + displayMeals + "🍇"; 
}
// Breakfast, Dinner, & Snacks
else if (bOpen.classList == "m_open" && lOpen.classList != "m_open" && dOpen.classList == "m_open" && sOpen.classList == "m_open") 
{    
    displayMeals = eTotalMeal("breakfast") + eTotalMeal("dinner") + eTotalMeal("snack");
    document.querySelector("#e_inner_output").innerHTML = "🍇B + D + S Calories: " + displayMeals + "🍇"; 
}    
// Lunch, Dinner, & Snacks
else if (lOpen.classList == "m_open" && dOpen.classList == "m_open" && sOpen.classList == "m_open" && bOpen.classList != "m_open" ) 
{    
    displayMeals = eTotalMeal("lunch") + eTotalMeal("dinner") + eTotalMeal("snack");
    document.querySelector("#e_inner_output").innerHTML = "🍇L + D + S Calories: " + displayMeals + "🍇"; 
}
// All Meals
else if (bOpen.classList == "m_open" && lOpen.classList == "m_open" && dOpen.classList == "m_open" && sOpen.classList == "m_open") 
{    
    displayMeals = eTotalMeal("breakfast") + eTotalMeal("lunch") + eTotalMeal("dinner") + eTotalMeal("snack");
    document.querySelector("#e_inner_output").innerHTML = "🍇All meals combined: " + displayMeals + "🍇"; 
}
else {
    document.querySelector("#e_inner_output").innerHTML = "🍇No Meal is Selected!!!🍇";   
}
});




    
