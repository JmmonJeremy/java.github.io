// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T', 
        },
        {
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A',
        },
    ],        
    enrollStudent: function(inputSection) {        
        let index = this.sections.findIndex(section => section.sectionNum == inputSection);
        if(index == 0 || index == 1) {
            this.sections[index].enrolled += 1;
            setSection(this.sections);
        }
    },
    dropStudent: function(inputSection) {
        let index = this.sections.findIndex(section => section.sectionNum == inputSection);
        if(index >= 0) {
            this.sections[index].enrolled --;
            setSection(this.sections);
        }
    },
    classAction: function(inputSection, decision) {
        let index = this.sections.findIndex(section => section.sectionNum == inputSection);
        if(index >= 0) {
            if(decision == "add") {
                this.sections[index].enrolled ++;
            }
            else if(decision == "drop") {
                this.sections[index].enrolled --;                
            }
            setSection(this.sections);           
        }
    }
};    
// 1st way to make a function
const setCourse = (course) => {
    let cName = document.querySelector("#courseName");
    cName.innerHTML = course.name;
    let cCode = document.querySelector("#courseCode");
    cCode.textContent = course.code;
}
// 2nd way to make a function
setSection = function(sections) {
    const tableElement = sections.map(section => 
        `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        </tr>`
        );
const htmlCode = document.querySelector("#sections");
htmlCode.innerHTML = tableElement.join("");
};
// Event Listeners
document.querySelector("#enrollStudent").addEventListener("click", (e) => {
    aCourse.classAction((document.querySelector("#sectionNumber").value), "add");
})

document.querySelector("#dropStudent").addEventListener("click", (e) => {
    aCourse.classAction((document.querySelector("#sectionNumber").value), "drop");
})
// Call functions
setCourse(aCourse);
setSection(aCourse.sections);
