//code to show library hours and enable query

//Pull in .json file, wraps everything
$.getJSON("scripts/hours.json", function(jsonFile){
        
//date lookup for hour display
function dateLookup(x){
    var found = false;
    for(var i = 0;i < jsonFile.length -1;i++){
        for(var j = 0; j < jsonFile[i].ymd.length; j++){
            if(jsonFile[i].ymd[j] == x){
               return jsonFile[i].time;
            };
        };
        if(i === 7){
            return jsonFile[8].dftime;
        };
    };
};

//Converts 3 letter month to 2 digit string
function monthConvert(x){
    switch(x){
        case "Jan":return "01";case "Feb":return "02";case "Mar":return "03";case "Apr":return "04";case "May":
        return "05";case "Jun":return "06";case "Jul":return "07";case "Aug":return "08";case "Sep":return "09";
        case "Oct":return "10";case "Nov":return "11";default:return "12";
    };
};

//hours submit function
function hourQuery(){
    var x = dateLookup(wantedDate);
    $("#date_search").prop('type','text');
    $("#date_search").fadeOut("fast").val(x).fadeIn("fast");
};

$("#date_search").click(function(){
    $(this).prop('type','date');
});

//grabs value when it is changed in date field dynamically-format: 1111-01-30
var wantedDate
$("#date_search").on("input",function(){
    wantedDate = $(this).val();
    hourQuery();
});

//grabs todays date and formats to 1111-01-30
var todaysMonth = new Date();
    todaysMonth.setDate(todaysMonth.getDate());
    todaysMonth = String(todaysMonth).slice(4,7);
    todaysMonth = monthConvert(todaysMonth);
var todaysDay = new Date();
    todaysDay.setDate(todaysDay.getDate());
    todaysDay = String(todaysDay).slice(8,10);
var todaysYear = new Date();
    todaysYear.setDate(todaysYear.getDate());
    todaysYear = String(todaysYear).slice(11,15);
var todaysDate = todaysYear + "-" + todaysMonth + "-" + todaysDay;

//grabs today's hour value and displays it
$("#hours_today").html(dateLookup(todaysDate));

//grabs tomorrows date and formats to 1111-01-30
var tomorrowsMonth = new Date();
    tomorrowsMonth.setDate(tomorrowsMonth.getDate() + 1);
    tomorrowsMonth = String(tomorrowsMonth).slice(4,7);
    tomorrowsMonth = monthConvert(tomorrowsMonth);
var tomorrowsDay = new Date();
    tomorrowsDay.setDate(tomorrowsDay.getDate() + 1);
    tomorrowsDay = String(tomorrowsDay).slice(8,10);
var tomorrowsYear = new Date();
    tomorrowsYear.setDate(tomorrowsYear.getDate() + 1);
    tomorrowsYear = String(tomorrowsYear).slice(11,15);
var tomorrowsDate = tomorrowsYear + "-" + tomorrowsMonth + "-" + tomorrowsDay;

//grabs tomorrow's hour value and displays it
$("#hours_tomorrow").html(dateLookup(tomorrowsDate));

//end getJSON
});
