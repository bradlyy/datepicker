(function() {
    const dateData = window.dateData;
    const calLayoutMaker = window.calLayoutMaker;
    const now = new Date();

    var datePicker = {};
    //datePicker组件的核心数据
    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth() + 1;
    var currentCalData = dateData.getDateData(currentYear, currentMonth)
    //datePicker组件的dom对象

    var datePickerComp = document.createElement('div');
    datePickerComp.className = 'ui-datepicker-wrapper'




    function init(input) {
        $input = document.querySelector(input);
        document.body.appendChild(datePickerComp);
        render();
        datePickerComp.addEventListener('click', function(e) {
            var $target = e.target;
            if ($target.tagName.toLowerCase() !== 'td') return;
            var date = $target.dataset.date;
            $input.value = date;
            datePickerComp.classList.remove('ui-datepicker-show')
        });
        datePickerComp.addEventListener('click', function(e) {
            e.preventDefault();
            var $target = e.target;
            if (!$target.classList.contains('ui-datepicker-btn')) return;
            if ($target.classList.contains('ui-datepicker-prev-btn')) {
                if(currentMonth == 1){
                    currentMonth = 12;
                    currentYear--;
                } else {
                    currentMonth--;
                };
                render();
            }
            if($target.classList.contains('ui-datepicker-next-btn')) {
                if(currentMonth == 12){
                    currentMonth = 1;
                    currentYear++;
                } else {
                    currentMonth++;
                };
                render();
            }
        });
        $input.addEventListener('click', function(e) {
            datePickerComp.classList.add('ui-datepicker-show');
        })
    }

    function render() {
        currentCalData = dateData.getDateData(currentYear, currentMonth)
        html = calLayoutMaker(currentCalData);

        datePickerComp.innerHTML = html;
    }



    datePicker.init = init
    datePicker.currentMonth = currentMonth;
    datePicker.currentYear = currentYear;
    datePicker.render = render;


    window.datePicker = datePicker;
})()
