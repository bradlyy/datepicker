(function() {
    var dateData = window.dateData;
    // const currentYear = dateData.currentYear;
    // const currentMonth = dateData.currentMonth;
    // const currentCal = dateData.getDateData(currentYear, currentMonth);
    function calLayoutMaker(ret) {
        var html = `<tr>`;
        //计算html模板循环
        for(let i = 0; i < ret.calDate.length; i++){
            if(i == ret.calDate.length -1){
                html = html + `<td data-date="${ret.calDate[i].fullDate}">${ret.calDate[i].date}</td>`;
                html += `</tr>`;
            } else {
                if(ret.calDate[i].weekday % 7 == 0){
                    html = html + `<td data-date="${ret.calDate[i].fullDate}">${ret.calDate[i].date}</td>`;
                    html += `</tr><tr>`;
                } else {
                    html = html + `<td data-date="${ret.calDate[i].fullDate}">${ret.calDate[i].date}</td>`;
                }
            }
        };

        html = `
        <div class="ui-datepicker-header">
          <a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>
          <a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>
          <span class="ui-datepicker-current">${ret.year}-${ret.month}</span>
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
            <tbody>` + html +`
            </tbody>
          </table>
        </div>
        `
        return html;
    }
    window.calLayoutMaker = calLayoutMaker;
})()
