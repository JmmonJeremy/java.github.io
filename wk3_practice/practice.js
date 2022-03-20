// Practice Problem #1
let p_list = ['one', 'two', 'three'];

let conversion = p_list.map(p => 
    "<li>" + p + "</li>"
);

document.getElementById("myList").innerHTML = conversion.join("");
//}
//makeList(p_list);
// Practice Problem #2
let grades = ['A', 'B', 'A'];

function gpa(letter) {
    if(letter == "A") {
        return 4;
    } 
    else if(letter == "B") {
        return 3;
    }   
    else if(letter == "C") {
        return 2;
    } 
    else if(letter == "D") {
        return 1;
    }
    else {
        return 0;
    }
}

let my_gpa_list = grades.map(gpa);

// Practice Problem #3
let cum_gpa = my_gpa_list.reduce(function (gpa_total, next_gpa) {
    return gpa_total + next_gpa;
  });

let final_gpa = cum_gpa / my_gpa_list.length;
// Add to web page
let display_gpa = document.querySelector("#myList");
let gpa_li = document.createElement("li");
gpa_li.textContent = "My GPA is: " + final_gpa.toFixed(2);
display_gpa.append(gpa_li);
// Practice Problem #4
let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let long_f = fruits.filter(fruit => fruit.length >= 6);
// Add to web page
let display_fruits = document.querySelector("#myList");
long_f.forEach(fruit => {
    let fruit_li = document.createElement("li");
    fruit_li.textContent = fruit;
    display_fruits.append(fruit_li);
    });

// Practice Problem #5
let numbers = [12, 34, 21, 54];
let luckNumber = 21;
let luckNumber_index = numbers.indexOf(luckNumber);
// Add to web page
let display_luckyNum = document.querySelector("#myList");
let luckyNum_li = document.createElement("li");
luckyNum_li.textContent = "The lucky number is " + luckNumber + " and is in the list at the index number of: " + luckNumber_index;
display_luckyNum.append(luckyNum_li);


