const insertTag = document.querySelector('.ui-datepicker-body table tbody');
const datePicker = document.querySelector('.ui-datepicker-wrapper')
const prevBtn = document.querySelector('.ui-datepicker-header .ui-datepicker-prev-btn')
const nextBtn = document.querySelector('.ui-datepicker-header .ui-datepicker-next-btn')
const theadTag = document.querySelector('.ui-datepicker-header span')
const inputTag = document.querySelector('.ui-datepicker-input');
const dateData = window.dateData
const calLayoutMaker = window.calLayoutMaker
var currentMonth = window.dateData.currentMonth
var currentYear = window.dateData.currentYear
var currentDateData = dateData.getDateData(currentYear, currentMonth-1)
// console.log(currentMonth, currentYear, currentDateData)
var html = calLayoutMaker(currentDateData)
insertTag.innerHTML = html
theadTag.innerHTML = `${currentYear}-${currentMonth}`
var dateBtn = document.querySelectorAll('.ui-datepicker-body table tbody td')
for(let i = 0; i < dateBtn.length; i++) {
    dateBtn[i].addEventListener('click', dateBtnHandler)
}

function prevBtnHandler(e) {
    e.preventDefault();
    if(currentMonth == 1){
        currentMonth = 12;
        currentYear--;
    } else {
        currentMonth--;
    };
    renderFunction();
    // console.log(currentDateData)
}

function nextBtnHandler(e) {
    e.preventDefault();
    if(currentMonth == 12){
        currentMonth = 1;
        currentYear++;
    } else {
        currentMonth++;
    };
    renderFunction();
}

function dateBtnHandler(e) {
    e.preventDefault();
    inputTag.value =`${currentYear}-${currentMonth}-${e.target.innerText}`;
    datePicker.classList.add('ui-datepicker-hide')
}

prevBtn.addEventListener('click', prevBtnHandler);
nextBtn.addEventListener('click', nextBtnHandler);
// dateBtn.addEventListener('click', dateBtnHandler)



function renderFunction() {
    currentDateData = dateData.getDateData(currentYear, currentMonth-1)
    html = calLayoutMaker(currentDateData)
    insertTag.innerHTML = html
    theadTag.innerHTML = `${currentYear}-${currentMonth}`
    dateBtn = document.querySelectorAll('.ui-datepicker-body table tbody td')
    for(let i = 0; i < dateBtn.length; i++) {
        dateBtn[i].addEventListener('click', dateBtnHandler)
    }
}

inputTag.addEventListener('focus', () => {
    datePicker.classList.remove('ui-datepicker-hide')
})
