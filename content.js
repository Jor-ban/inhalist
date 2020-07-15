//data
let data = [
    [
        `Component`,
        `Don't know when your lesson starts and ends?`,
        {
            color:'green',
            text: `You can check it on <a href="http://iut.edupage.org/timetable">timetable web-site</a> and find your group on classes dropDown menu`
        },
        {
            color:'green',
            text:`You can also use unofficial mobile application from <a href="https://github.com/JRakhimov/">Rakhimov Javohir</a> which has a telegram bot and many interesting features <a href="https://iutimetable.netlify.com/index.html">see the web-site</a>`
        },
    ],
    [
        `exam`,
        `Don't know where you should submit your homeworks and where to check results?`,
        {
            color:'green',
            text:`For submitting and viewing results IUT has <a href="http://eclass.inha.uz">e-class web-site</a> where you have to input your ID and password<br>To see homeTasks results choose subject -> Assignments -> Assignment-history button near top of homeTasks list`
        },
        {
            color:`green`,
            text:`Sometimes Final exams results are firstly printed in <a href="http://ins.inha.uz">INHA-ins</a>, there you can also know your GPA`
        }
    ],
    [
        `wifi`,
        `Having problems with IUT wi-fi?`,
        {
            color:'green',
            text:`Need to log out from wi-fi? here is the link <a href="https://gw1.inha.uz:1003/keepalive?050a0e050c0a0102">the log out page</a> <br> ! If you used to log-in in 2 devices you are not allowed until you do not log out in one of using`
        },
        {
            color:'green',
            text: `If you are a freshman its probably that you didn't registrate yet, for that you need to register your IUT account in a building library (3rd level computers)`
        },
        {
            color:`green`,
            text:`There can also be a period, when every student has to change wi-fi password, to do it just open <a href="https://mail.inha.uz">INHA mail</a> and change it`
        },
        {
            color:`yellow`,
            text:`If you are blocked and want to know the reason, then visit <a href="https://helpdesk.inha.uz/StudentInfo">IUT helpDesk</a>, probably thats just because of payment deadline or using IUT wi-fi too much`
        },
        {
            color:`red`,
            text: `But if there is no mentioned reason, go and talk to IT department specialists, they are in a-202`
        }
    ],
    [
        `java`,
        `Problems with Eclass?`,
        {
            color:'green',
            text:`For better connection better use <a href="https://www.microsoft.com/ru-ru/windows/microsoft-edge">Microsoft Edge</a>(Internet Explorer) or <a href="https://www.mozilla.org/ru/firefox/new/">Firefox browser</a>`
        },
        {
            color: 'yellow',
            text: 'To change your password in e-class you should visit <a href="http://ins.inha.uz/">ins.inha.uz</a>'
        },
        {
            color:'red',
            text:`Even if submitting is freezed on 80% and doesn't even try to load, <span style="color:red">DO NOT</span> send you home assignment to teacher by e-mail, telegram or by any other way, some teachers can take your homework after deadline with subtracting some points, but some of them DON'T so, always try to submit as early as possible`
        }
    ],
    [
        `open-magazine`,
        `Info about library books renting and lockers`,
        {
            color:`green`,
            text:`To rent a book you need to bring your ID card to library on 3 floor, you can rent a book for 2 weeks, after you have to return or talk to library staff to extend reading period up to 1 month`
        },
        {
            color:`green`,
            text:`To own a locker you have to bring a lock and meet staff on b-building basement`
        }
    ],
    [
        `division`,
        `Info about GPA system and how to calculate it`,
        {
            color:`green`,
            text:`A grade point average is a number representing the average value of the accumulated final grades earned in courses over time. More commonly called a GPA, a student’s grade point average is calculated by adding up all accumulated final grades and dividing that figure by the number of grades awarded. This calculation results in a mathematical mean—or average—of all final grades. The most common form of GPA is based on a 0 to 4.5 scale (A = 4.0, B = 3.0, C = 2.0, D = 1.0, and F = 0), with a 4.5 representing a “perfect” GPA—or a student having earned straight As in every course <br> for more information here is <a href="https://www.google.com/search?q=what+is+gpa&oq=what+is+&aqs=chrome.0.69i59j69i57j35i39j0l3.2030j0j1&sourceid=chrome&ie=UTF-8">the link</a>`
        },
        {
            color:`green`,
            text:`You can also use <a href="calculator.html">the GPA calculator</a> to be sure in calculations`
        }
    ],
    [
        `forms`,
        `Approvement about studying in INHA university`,
        {
            color: 'green',
            text: `If you need an approvement for your school/lyceum/college you need to submit <a href="https://docs.google.com/forms/d/e/1FAIpQLScE6ou7z_T7MDnc3LdKNmwqwDxqpQsOsk3ROWugbCnjLVoJOQ/viewform">this google form</a>`
        },
        {
            color: 'yellow',
            text: `Otherwise If military recruitment office asks then you need to bring your passport and contact administration on 6th floor on A building`
        }
    ],
    [
        `question`,
        `Other questions or a problem that needs to be discussed?`,
        {
            color:'green',
            text:`First of all ask <a href="http://google.com">this guy</a> for help`
        },
        {
            color:`green`,
            text:`but also we have a telegram group <a href="https://t.me/joinchat/EMtqDj90LtdYsTWWM2uP6A">IUT super family</a>, where you can deeper know your university life`
        }
    ]
];

//main function
window.onload = function () {
    let content = ``;
    for (let i = 0; i < data.length; i++) {
        content += `
        <div id="accordion">
            <div class="card">
                <!-- head -->
                <div class="list-hover mb-3" id="cardHeader${i}">
                    <div class="list-border"></div>
                    <a href="#collapse${i}" data-parent="#accordion" data-toggle="collapse"
                        class="card-header d-flex align-items-center px-2" id="link${i}"
                        onclick="active('cardHeader${i}','link${i}')">
                        <div class="section-icon"><img src="img/${data[i][0]}.svg" alt="" width="34px"></div>
                        <p>${data[i][1]}</p>
                    </a>
                    <div class="list-border"></div>
                </div>`;
            for(let n = 2; n < data[i].length ; n++){
                content += `
                <div id="collapse${i}" class="collapse">
                    <div class="card-body p-0">
                        <div class="${data[i][n].color} d-flex">
                            <p>${data[i][n].text}</p>
                        </div>
                        <div class="d-flex">
                            <div class="border-down"></div>
                            <a href="#collapse${i}" data-parent="#accordion" data-toggle="collapse" class="card-header"
                                id="link${i}" onclick="active('cardHeader${i}','link${i}')">
                                <p class="">^</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
            }
    }
    document.getElementById('container').innerHTML = content;
}