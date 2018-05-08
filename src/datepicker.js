(function() {
    const dateData = window.dateData;
    const calLayoutMaker = window.calLayoutMaker;
    const now = new Date();

    var datePicker = {};
    //datePicker组件的核心数据
    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth() + 1;
    var currentCalData = dateData.getDateData(currentYear, currentMonth).calData
    //datePicker组件的dom对象
    var datePickerLayout = `
    <div class="ui-datepicker">
      <input type="text" class="ui-datepicker-input">
    </div>
    <div class="ui-datepicker-wrapper ui-datepicker-hide">
      <div class="ui-datepicker-header">
        <a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>
        <a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>
        <span class="ui-datepicker-current"></span>
      </div>
      <div class="ui-datepicker-body">
        <table>
          <thead>
            <tr>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
              <th>日</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
    `
    var datePickerComp = document.createElement('div');
    datePickerComp.innerHTML = datePickerLayout;

    var html;
    var prevBtn;
    var nextBtn;
    var dateBtn;
    var theadTag;
    var inputTag;
    var insertTag;
    var datePickerWrapper;

    function prevBtnHandler(e) {
        e.preventDefault();
        if(currentMonth == 1){
            currentMonth = 12;
            currentYear--;
        } else {
            currentMonth--;
        };
        render();
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
        render();
    }

    function dateBtnHandler(e) {
        e.preventDefault();
        if(currentMonth < 10){
            if(parseInt(e.target.innerText) < 10){
                inputTag.value = currentYear + '-0' + currentMonth + '-0' + e.target.innerText;
            } else {
                inputTag.value = currentYear + '-0' + currentMonth + '-' + e.target.innerText;
            }
        } else {
            inputTag.value = currentYear + '-' + currentMonth + '-' + e.target.innerText;
        }
        datePickerWrapper.classList.add('ui-datepicker-hide')
    }


    function init(d) {
        d.appendChild(datePickerComp)
        console.log(d);
        prevBtn = document.querySelector('.ui-datepicker-header .ui-datepicker-prev-btn')
        nextBtn = document.querySelector('.ui-datepicker-header .ui-datepicker-next-btn')
        theadTag = document.querySelector('.ui-datepicker-header span')
        inputTag = document.querySelector('.ui-datepicker-input');
        insertTag = document.querySelector('.ui-datepicker-body table tbody');
        datePickerWrapper = document.querySelector('.ui-datepicker-wrapper')
        prevBtn.addEventListener('click', prevBtnHandler);
        nextBtn.addEventListener('click', nextBtnHandler);
        inputTag.addEventListener('focus', () => {
            datePickerWrapper.classList.remove('ui-datepicker-hide')
        })
        render();
    }

    function render() {
        currentCalData = dateData.getDateData(currentYear, currentMonth).calData
        html = calLayoutMaker(currentCalData)
        insertTag.innerHTML = html
        theadTag.innerText = currentMonth < 10 ? currentYear + '-0' + currentMonth : currentYear + '-' + currentMonth;
        dateBtn = document.querySelectorAll('.ui-datepicker-body table tbody td')
        for(let i = 0; i < dateBtn.length; i++) {
            if (dateBtn[i].innerText != ''){
                dateBtn[i].addEventListener('click', dateBtnHandler)
            }
        }
    }



    datePicker.init = init
    datePicker.currentMonth = currentMonth;
    datePicker.currentYear = currentYear;
    datePicker.render = render;


    window.datePicker = datePicker;
})()
