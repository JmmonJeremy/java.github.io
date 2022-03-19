/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const profile = {
// Step 2: Inside of the object, add a property named name with a value 
//of your name as a string
name: "Jeremy Troy Suchanski",
// Step 3: Add another property named photo with a value of the image 
//path and name (used in Task 2) as a string
photo: "images/myPicture.jpg",
// Step 4: Add another property named favoriteFoods with a value of an 
//array of your favorite foods as strings ( hint: [] )
favoriteFoods: [
    "pizza", 
    " icecream", 
    " hamburgers", 
    " lasagna", 
    " potato salad",
],
// Step 5: Add another property named hobbies with a value of an array of 
//your hobbies as strings
hobbies: [
    "learning",
    "reading",
    "photography",
    "basketball",
    "camping", 
],
// Step 6: Add another property named placesLived with a value of an empty array
placesLived: 
[
// Step 7: Inside of the empty array above, add a new object with two properties: 
//place and length and values of an empty string
    placeLived = {
        place: [
            // Step 8: For each property, add appropriate values as strings
            "Newberg, Oregon",
            // Step 9: Add additional objects with the same properties for each place you've lived
            "Munich, Germany",
            "Pleasant Grove, Utah",
            "Willamina, Oregon",
            "Cedar City, Utah",
            "Hurricane, Utah",
            "Aurora, Oregon",
            "Hillsboro, Oregon"
        ],
        duration: [
            // Step 8: For each property, add appropriate values as strings
            "21 years",
            // Step 9: Add additional objects with the same properties for each place you've lived
            "2 years",               
            "1 year",
            "2 years",
            "1 year",
            "1 year",
            "14 years",
            "7 years",
        ],
    },
],
};
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) 
//to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = profile.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML 
//<img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", profile.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML 
//<img> element with an ID of photo
document.querySelector("#photo").setAttribute("alt", profile.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML 
//<li> element and place its value in the <li> element
let favFood = document.querySelector("#favorite-foods");
profile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;   
// Step 5: Append the <li> elements created above as children of the HTML <ul> 
//element with an ID of favorite-foods
    favFood.append(li);
    });
// Step 6: Repeat Step 4 for each hobby in the hobbies property
let myHobby = document.querySelector("#hobbies");
profile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;   
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    myHobby.append(li);
    });
// Step 8: For each object in the <em>placesLived</em> property:
let lived = document.getElementById("places-lived");
let index = 0;
// - Create an HTML <dt> element and put its place property in the <dt> element
    for(place of profile.placesLived) {
        for(let i = 0; i < placeLived.place.length; i++) {
            let dt = document.createElement("dt");
            dt.innerHTML = placeLived.place[i];
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> 
//element with an ID of places-lived
            lived.append(dt);
// - Create an HTML <dd> element and put its length property in the <dd> element           
            let dd = document.createElement("dd");
            dd.innerText = placeLived.duration[index];
            index ++;
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> 
//element with an ID of places-lived              
            lived.append(dd);    
        }

    }



