(function(){
    var dateData = {};

    // var now = new Date();
    // const currentYear = now.getFullYear();
    // const currentMonth = now.getMonth() + 1;

    //转换日期的数据格式
    function day(year, month, date) {
        // month参数为实际月份-1
        var dayData = {};
        const i = new Date(year, month, date);
        dayData.year = i.getFullYear();
        dayData.month = i.getMonth() + 1;
        dayData.date= i.getDate();
        dayData.weekday = i.getDay() ? i.getDay() : 7;
        return dayData;
    };

    function howManyDaysOfMonth(year, month){
        //month参数为实际月份
        var howManyDays = new Date(year, month, 0).getDate();
        return howManyDays;
    };

    function getDateData(year, month) {
        //month参数为实际月份
        var daysCount = howManyDaysOfMonth(year, month);
        var firstDayOfMonth = day(year, month - 1, 1); //第一天
        var lastDayofMonth = day(year, month - 1, daysCount); //最后一天
        var beforeDaysCount = firstDayOfMonth.weekday - 1;
        var afterDaysCount = 7 - lastDayofMonth.weekday;
        var beforeDays = [];
        // console.log(year, month, daysCount, beforeDaysCount, firstDayOfMonth, afterDaysCount, lastDayofMonth)
        for(let i = beforeDaysCount - 1; i > -1; i--){
            beforeDays.push(
                {date: ''}
            );
        }
        // console.log(beforeDays);
        const thisMonthDays = [];
        for(let i = 0; i < daysCount; i++){
            thisMonthDays.push(
                day(year, month - 1, i + 1)
            );
        }
        // console.log(thisMonthDays)
        const afterDays = [];
        for(let i = 0; i < afterDaysCount; i++){
            afterDays.push(
                {date: ''}
            )
        }
        // console.log(afterDays)
        var calData = beforeDays.concat(thisMonthDays.concat(afterDays));
        var ret = {};
        ret.calData = calData;
        ret.daysCount = daysCount;
        ret.firstDayOfMonth = firstDayOfMonth;
        ret.lastDayofMonth = lastDayofMonth;
        return ret;
    }

    dateData.getDateData = getDateData;
    dateData.howManyDaysOfMonth = howManyDaysOfMonth;
    // dateData.day = day;

    window.dateData = dateData;
})()
