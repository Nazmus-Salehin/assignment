

//first problem : kilometerToMeter
function kilometerToMeter(kilometer) {
    var whenMinus = "error";
    if (kilometer < 0) {
        return whenMinus;
    } else {
        var meter = 0;
        meter = kilometer * 1000;
    }
    return meter;

}
var result = kilometerToMeter(5);
console.log(result);



//second problem : budgetCalculator
function budgetCalculator(clock, mobile, laptop) {
    var whenMinus = "error";
    if (clock, mobile, laptop < 0) {
        return whenMinus;
    }
    else {
        var totalPrice = clock * 50 + mobile * 100 + laptop * 500;
    }
    return totalPrice;

}
var result = budgetCalculator(2, 2, 2);
console.log(result);




//third problem : hotelCost
function hotelCost(day) {
    var whenMinus = "error";
    if (day < 0) {
        return whenMinus;
    }
    else {
        var cost = 0;
        if (day <= 10) {
            cost = day * 100;
        }
        else if (day <= 20) {
            var firstTenDays = 10 * 100;
            var residual = day - 10;
            var secondTenDays = residual * 80;
            cost = firstTenDays + secondTenDays;
        }
        else {
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var residual = day - 20;
            var twentyDaysToUnlimited = residual * 50;
            cost = firstTenDays + secondTenDays + twentyDaysToUnlimited;
        }
        return cost;
    }

}
var totalHotelCost = hotelCost(21);
console.log(totalHotelCost);




//4th problem : megaFriend
function megaFriend(name) {
    var whenEmptyArrayOrStr = "error";
    if (name.length == 0) {
        return whenEmptyArrayOrStr;
    }
    else {
        var longestName = "";
        for (var i = 0; i < name.length; i++) {
            if (longestName.length < name[i].length) {
                longestName = name[i];
            }
        }
        return longestName;
    }
}
var result = megaFriend(['koushik', 'rony', 'shuvo', 'nayeem']);
console.log(result);