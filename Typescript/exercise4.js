/*Exercise 4: Enumerations

Create an enumeration for different days of the week.
Write a function that takes a DayOfWeek and returns a message indicating whether it's a working day or a weekend.*/
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));
;
var dayType = function (day) {
    var res;
    switch (day) {
        case DayOfWeek.Sunday:
            res = "weekend";
            break;
        case DayOfWeek.Saturday:
            res = "weekend";
            break;
        default:
            res = "working day";
    }
    return res;
};
var res = dayType(DayOfWeek.Sunday);
console.log(res);
