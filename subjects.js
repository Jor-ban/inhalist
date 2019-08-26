let credits = {
    OOP_1: 3,
    Calculus_1: 3,
    Physics_1: 3,
    Intro_To_IT: 3,
    Academic_English_1: 2,
    Academic_Reading: 2,
    Physics_Experiment_1: 1,
    line7: 'freshmen_1',
    Calculus_2: 3,
    Creative_Engineering: 3,
    Physics_2: 3,
    OOP_2: 3,
    Academic_English_2: 2,
    Academic_Writing: 2,
    Physics_Experiment_2: 1,
    line15: 'freshmen_2',
    Internet_Programing_1: 3,
    Circuit_and_Lab_1: 3,
    Engineering_Math_1: 3,
    Computer_Architecture_1: 3,
    System_Programing_1: 3,
    Academic_English_3: 2,
    History_1: 1,
    Basic_korean_1: 1,
    line24: 'sophomore_1',
    Internet_Programing_2:3,
    Circuit_and_Lab_2:3,
    Engineering_Math_2:3,
    Computer_Architecture_2:3,
    System_Programing_2:3,
    Academic_English_4: 2,
    History_2: 1,
    Basic_korean_2: 1,
    line33:'sophomore_2',
};

function AverageGpa() {
    let show = 0;
    let amount = 0;
    if(semesterGpa(0,7,'freshmen_1')){show += semesterGpa(0,7,'freshmen_1'); amount++}
    if(semesterGpa(8,15,'freshmen_2')){show += semesterGpa(8,15,'freshmen_2'); amount++}
    if(semesterGpa(16,24,'sophomore_1')){show += semesterGpa(16,25,'sophomore_1'); amount++}
    if(semesterGpa(25,33,'sophomore_2')){show += semesterGpa(25,34,'sophomore_2'); amount++}


    return Math.round(show*100/amount)/100;
}