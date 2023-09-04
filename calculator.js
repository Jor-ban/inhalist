//data part
import { credits } from './calculator-data.js';

let marksList = [
    {
        name: 'aPlus',
        textName: 'A+',
        value: 4.5,
    }, {
        name: 'a',
        textName: 'A',
        value: 4,
    }, {
        name: 'bPlus',
        textName: 'B+',
        value: 3.5,
    }, {
        name: 'b',
        textName: 'B',
        value: 3,
    }, {
        name: 'cPlus',
        textName: 'C+',
        value: 2.5,
    }, {
        name: 'c',
        textName: 'C',
        value: 2,
    }, {
        name: 'dPlus',
        textName: 'D+',
        value: 1.5,
    }, {
        name: 'd',
        textName: 'D',
        value: 1,
    }, {
        name: 'f',
        textName: 'F',
        value: 0,
    },
]
const marksState = {}

window.set = function(semesterName, courseName, markIndex) {
    if(marksState[semesterName][courseName] === marksList[markIndex].value) {
        delete marksState[semesterName][courseName]
        setButtonStyle(courseName, markIndex, false)
    } else {
        marksState[semesterName][courseName] = marksList[markIndex].value;
        setButtonStyle(courseName, markIndex, true)
    }
    calculate(semesterName);
    calculateAverage();
}

function setButtonStyle(courseName, markIndex, addClass){
    marksList.forEach(mark => document.getElementById(courseName + mark.name).classList.remove('active-mark'));
    if(addClass)
        document.getElementById(courseName + marksList[markIndex].name)?.classList?.add('active-mark');

}

function calculateAverage(){
    let activeSemesters = 0;
    let sum = 0;
    Object.keys(marksState).forEach(semester =>{
        if(marksState[semester]['overall']){
            sum += marksState[semester]['overall'];
            activeSemesters++;
        }
    });
    document.getElementById('gpa').innerHTML = (sum / (activeSemesters || 1)).toFixed(2);
}

function calculate(semesterName){
    let earnedMarksSum = 0;
    let creditsOverall = 0;
    let courseInfo = credits.find(s => s.name == semesterName);

    courseInfo.subjects.forEach(course => {
        if(marksState[semesterName][course.name] !== undefined) {
            earnedMarksSum += course.credits * marksState[semesterName][course.name];
            creditsOverall += course.credits;
        }
    })
    console.log({ semesterName, creditsOverall, earnedMarksSum, courseInfo, marksState })
    const semesterGpa = earnedMarksSum / (creditsOverall || 1);
    marksState[semesterName].overall = semesterGpa;
    document.getElementById(semesterName).innerHTML = semesterGpa.toFixed(2);
}

//main function
window.onload = function () {
    let courseBlock = '';
    credits.forEach((semester) => {
        marksState[semester.name] = {};

        semester.subjects.forEach((course) => {
            courseBlock += `
            <div class="d-flex align-items-center p-2 course">
                <div class="section-icon px-3 py-2"> ${ course.credits } </div>
                <div class="d-flex justify-content-between flex-wrap w-100 align-items-center el">
                    <p> ${ course.name } </p>
                    <div class="marks d-flex">` 
                    //buttons
                    marksList.forEach((mark, markIndex) => {
                        courseBlock += `
                            <div class="mark-option ${ mark.name }" id="${ course.name + mark.name }" onclick="set('${semester.name}','${ course.name }',${ markIndex })">
                                <p>${ mark.textName }</p>
                            </div>
                        `
                    })
                courseBlock += `</div> </div> </div>`;
        })
        courseBlock += '<div class="width:100 text-center py-3 m-2" style="border: 3px solid rgb(131, 218, 255); border-radius: 30px;"><p>' + semester.name + ' semester GPA: <span id="' + semester.name + '"></span></p></div>'
    });
    document.querySelector('#container').innerHTML = courseBlock;
}