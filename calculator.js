//data part
let rating = {
    aPlus: 'A+',
    a: 'A',
    bPlus: 'B+',
    b: 'B',
    cPlus: 'C+',
    c: 'C',
    dPlus: 'D+',
    d: 'D',
    f: 'F'
}
let marks = {};


//functions
function isString(number) {
    if (number / 2) return true;
    else return false;
}

function evaluation(subject) {
    //HTML text, just divMaker
    let string = ``;
    for (let i = 0; i < Object.keys(rating).length; i++) {
        string += `<div class="` + Object.keys(rating)[i] + `" id="` + subject + Object.keys(rating)[i] + `" onclick = "set('` + subject + `', '` + Object.keys(rating)[i] + `')"><p>` + Object.values(rating)[i] + `</p></div>`
    }

    return string;
}

function set(subject, letter) {
    marks[subject] = evalStandards(letter);
    style(subject, letter);
    // document.getElementById('gpa').innerText = calculateGpa(credits, marks);
    document.getElementById('gpa').innerHTML = AverageGpa();
}

function evalStandards(el) {
    if (el == 'aPlus') return 4.5
    else if (el == 'a') return 4
    else if (el == 'bPlus') return 3.5
    else if (el == 'b') return 3
    else if (el == 'cPlus') return 2.5
    else if (el == 'c') return 2
    else if (el == 'dPlus') return 1.5
    else if (el == 'd') return 1
    else if (el == 'f') return 0
    else return el;
}

function calculator(creditsObj, marksObj) {

    let calc = 0;
    let overallCredits = 0;
    for (let i = 0; i < Object.values(marksObj).length; i++) {

        if (Object.values(creditsObj)[i] && (Object.values(marksObj)[i] || Object.values(marksObj)[i] == 0) && isString(Object.values(creditsObj)[i])) {

            calc += Object.values(creditsObj)[i] * Object.values(marksObj)[i];
            overallCredits += Object.values(creditsObj)[i];
        }
    }
    return Math.round(calc * 100 / overallCredits) / 100;
}

function semesterGpa(from, upTo, id) {
    let tempObj = {};
    for (let n = from; n < upTo; n++) {
        tempObj[Object.keys(credits)[n]] = marks[Object.keys(credits)[n]];
    }
    if (calculator(credits, tempObj)) {
        document.getElementById(id).innerHTML = calculator(credits, tempObj);
        return calculator(credits, tempObj);
    } else document.getElementById(id).innerHTML = 0;
}

function style(subject, letter) {

    for (let i = 0; i < Object.keys(rating).length; i++) {
        document.getElementById(subject + Object.keys(rating)[i]).classList.remove(Object.keys(rating)[i] + 'Active');
    }
    document.getElementById(subject + letter).classList.add(letter + 'Active');


}
//main function
window.onload = function () {
    let subjectBlock = ' ';
    for (let i = 0; i < Object.entries(credits).length; i++) {
        if (Object.keys(credits)[i] == 'line' + i) {
            subjectBlock += '<div class="width:100 text-center py-3 m-2" style="border: 3px solid rgb(131, 218, 255); border-radius: 30px;"><p>' + Object.values(credits)[i] + ' semester GPA: <span id="' + Object.values(credits)[i] + '"></span></p></div>'
        } else {
            subjectBlock += `
            <div class="d-flex align-items-center p-2">
                <div class="section-icon px-3 py-2">` + Object.values(credits)[i] + `</div>
                <div class="d-flex justify-content-between flex-wrap w-100 align-items-center el">
                    <p>` + Object.keys(credits)[i] + `</p>
                    <div class="marks d-flex">` + evaluation(Object.keys(credits)[i]) +
                `</div>
                </div>
            </div>`;
        }
    }
    document.getElementById('container').innerHTML = subjectBlock;
}