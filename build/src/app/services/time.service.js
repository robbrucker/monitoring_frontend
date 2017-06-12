var app = angular.module("time.service", []);
app.factory('timeService', function(moment) {
    var timeService = {
        convertTime: function(oppositeTime, editedVal, type) {
            var startHourDay = 0;
            if(oppositeTime === null) {
                var today = moment(moment(Date.now())).format("YYYY-MM-DD");
                editedVal = moment(editedVal).format("HH:mm:ss");
                return moment(today + ' ' + editedVal).format('"YYYY-MM-DD HH:mm:ssZ');
            }
            else {
                if(type === 'end') {
                    var startHour = moment(oppositeTime).format("HH");
                    var endHour = moment(editedVal).format("HH");
                    if(startHour > endHour) {
                        startHourDay = moment(oppositeTime, "YYYY-MM-DD Z").add(1, "days");
                    }
                }
                var dateVal = startHourDay !== 0 ? startHourDay.format("YYYY-MM-DD") : moment(oppositeTime).format('"YYYY-MM-DD');
                dateVal = dateVal.replace(/-/g, "/");
                var formattedVal = moment(editedVal).format("HH:mm:ss");

                return moment(dateVal + ' ' + formattedVal).format('"YYYY-MM-DD HH:mm:ssZ');
            }
        }

    };
    return timeService;
});