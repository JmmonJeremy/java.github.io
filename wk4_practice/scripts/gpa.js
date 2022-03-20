// First way to declare a function
const getGrades = () => { 
    let gradeInputs= document.querySelector("#grades").value;
    let capitals = gradeInputs.toUpperCase();
    let grades= capitals.split(",");
    let cleanGrades= grades.map(grade => grade.trim())
    return cleanGrades
}
// Second way to declare a function
const lookUpGrade = function(grade) {
    let score;
    if(grade == "A") {
        score= 4;        
    }
    else if(grade == "B") {
        score= 3;
    }
    else if(grade == "C") {
        score= 2;
    }
    else if(grade == "D") {
        score= 1;
    }
    else if(grade == "F") {
        score= 0;
    }
    return score;
}
// Third way to declare a function
function calculateGpa(grades) {
    let gpaPts= grades.map(grade => lookUpGrade(grade));
    let gpaPtsTot = gpaPts.reduce((gpaTot, gpaPts1) => gpaTot + gpaPts1, 0);    
    let gpa = gpaPtsTot / gpaPts.length;
    return gpa.toFixed(2);
}
displayGpa = (gpa, id) => {
    let display= document.querySelector(id).textContent = gpa;
}
function clickHandler() {
    let grades= getGrades();
    let gpa=  calculateGpa(grades);
    displayGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler)

