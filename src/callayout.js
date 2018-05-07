(function() {
    var dateData = window.dateData;
    // const currentYear = dateData.currentYear;
    // const currentMonth = dateData.currentMonth;
    // const currentCal = dateData.getDateData(currentYear, currentMonth);
    function calLayoutMaker(calDate) {
        var html = `<tr>`;
        //计算html模板循环
        for(let i = 0; i < calDate.length; i++){
            if(i == calDate.length -1){
                html = html + `<td>${calDate[i].date}</td>`;
                html += `</tr>`;
            } else {
                if(calDate[i].weekday % 7 == 0){
                    html = html + `<td>${calDate[i].date}</td>`;
                    html += `</tr><tr>`;
                } else {
                    html = html + `<td>${calDate[i].date}</td>`;
                }
            }
        };
        return html;
    }
    window.calLayoutMaker = calLayoutMaker;
})()
