//data part
let credits = [
    {
        name: 'Freshmen 1st',
        'OOP 1': 3,
        'Calculus 1': 3,
        'Physics 1': 3,
        'Intro To IT': 3,
        'Academic English 1': 2,
        'Academic Reading': 2,
        'Physics Experiment 1': 1,
    },
    {
        name: 'Freshmen 2nd',
        'Calculus 2': 3,
        'Creative Engineering': 3,
        'Physics 2': 3,
        'OOP 2': 3,
        'Academic English 2': 2,
        'Academic Writing': 2,
        'Physics Experiment 2': 1,
    },
    {
        name: 'Sophomore 1st',
        'Linear Algebra' : 3,
        'Discrete Mathematics': 3,
        'Application Programing in Java': 3,
        'Digital Logic and Circuit': 3,
        'Data Structure' : 3,
        'Academic English 3': 2,
        'Basic korean 1': 1,
    },
    {
        name: "Sophomore 2nd",
        'Engineering Math': 3,
        'History of Uzbekistan': 3,
        "Computer Architecture / Signals": 3,
        'System Programing': 3,
        "Internet Programing / Economics": 2,
        'Academic English 4': 2,
        'Basic korean 2': 1,
    }
];
let rating = {
    aPlus: {
        textForm: 'A+',
        value: 4.5,
    },
    a: {
        textForm: 'A',
        value: 4,
    },
    bPlus: {
        textForm: 'B+',
        value: 3.5,
    },
    b: {
        textForm: 'B',
        value: 3,
    },
    cPlus: {
        textForm: 'C+',
        value: 2.5,
    },
    c: {
        textForm: 'C',
        value: 2,
    },
    dPlus: {
        textForm: 'D+',
        value: 1.5,
    },
    d: {
        textForm: 'D',
        value: 1,
    },
    f: {
        textForm: 'F',
        value: 0,
    },
}
let marks = {};

function set(semesterName, course, mark){
    marks[semesterName][course] = rating[mark]['value'];
    return calculate(semesterName);
}

function setButtonStyle(course, value){
    let marksList = Object.keys(rating);
    let textMark = '';
    switch(value){
        case 4.5:
            textMark = 'aPlus'; break;
        case 4:
            textMark = 'a'; break;
        case 3.5:
            textMark = 'bPlus'; break;
        case 3:
            textMark = 'b'; break;
        case 2.5:
            textMark = 'cPlus'; break;
        case 2:
            textMark = 'c'; break;
        case 1.5:
            textMark = 'dPlus'; break;
        case 1:
            textMark = 'd'; break;
        default:
            textMark = 'f';
    }
    marksList.forEach(mark => {
        console.log(course, mark)
        if(mark != textMark){
            document.getElementById(course + mark).classList.remove(mark + 'Active');
        }
    });
    document.getElementById(course + textMark).classList.add(textMark + 'Active');

}

function calculateAverage(){
    let activeSemesters = 0;
    let sum = 0;
    Object.keys(marks).forEach(semester =>{
        if(marks[semester]['overall']){
            sum += marks[semester]['overall'];
            activeSemesters++;
        }
    });
    document.getElementById('gpa').innerHTML = (sum / activeSemesters).toFixed(2);
}

function calculate(semester){
    let semesterGpa = 0;
    let earnedMarks = 0;
    let earnedCredits = 0;
    let courseCredits = {};
    credits.forEach(element => {
        if(element['name'] == semester)
            courseCredits = element;
    });
    Object.keys(marks[semester]).forEach(course => {
        if(course != 'overall'){
            earnedMarks += marks[semester][course] * courseCredits[course];
            earnedCredits += courseCredits[course];
            if(courseCredits[course] == 0)
                earnedCredits += 1; // in case if got F
            setButtonStyle(course, marks[semester][course])
        }
    })
    semesterGpa = earnedMarks / earnedCredits;
    marks[semester]['overall'] = semesterGpa;
    document.getElementById(semester).innerHTML = semesterGpa.toFixed(2);
    calculateAverage();
}

//main function
window.onload = function () {
    let courseBlock = '';
    credits.forEach(semester => {    

        let semesterName = semester['name']
        marks[semesterName] = {};
        for(let n = 1; n < Object.values(semester).length; n++){
            course = Object.keys(semester)[n];
            courseBlock += `
            <div class="d-flex align-items-center p-2">
                <div class="section-icon px-3 py-2"> ${ semester[course] } </div>
                <div class="d-flex justify-content-between flex-wrap w-100 align-items-center el">
                    <p> ${ course } </p>
                    <div class="marks d-flex">` 
                    //buttons
                    for(let k = 0; k < Object.keys(rating).length; k++){
                        let mark = Object.keys(rating)[k];
                        courseBlock += `<div class=" ${ mark }" id="${ course + mark }" onclick = "set( '${semesterName}', '${ course }', '${ mark }')"><p> ${ rating[mark]['textForm'] } </p></div>`
                    }
                courseBlock += `</div> </div> </div>`;
        }
        courseBlock += '<div class="width:100 text-center py-3 m-2" style="border: 3px solid rgb(131, 218, 255); border-radius: 30px;"><p>' + semesterName + ' semester GPA: <span id="' + semesterName + '"></span></p></div>'
    });
    document.querySelector('#container').innerHTML = courseBlock;
}