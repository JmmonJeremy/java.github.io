// Practice Problem #1
let p_list = ['one', 'two', 'three'];

let conversion = practice_list.map(function(p) {
    return "<li>"+ p + "</li>";
});

document.getElementById("myList").innerHTML = conversion.join();
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
let gpa_list = grades.map(gpa);
let my_pts = gpa_list.join();

let cum_gpa = my_pts.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  }, 0)

  let final_gpa = cum_gpa/my_pts.length;

// Practice Problem #4
let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let long_f = fruits.filter(fruit => fruit.length > 6);

// Practice Problem #5
let numbers = [12, 34, 21, 54];
let luckNumber = 21;
let luckNumber_index = numbers.indexOf(luckNumber);



