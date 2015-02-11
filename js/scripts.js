var coinCombo = function(change) {
    var totalCoins = [];


    var quarters = Math.floor(change / 0.25);
    totalCoins.push((quarters.toString()).concat(" quarter(s)"));

    var dimes = Math.floor((change - (quarters * 0.25)).toPrecision(2) / 0.10);
    totalCoins.push((dimes.toString()).concat(" dime(s)"));

    var nickels = Math.floor((change - (quarters * 0.25) - (dimes * 0.1)).toPrecision(2) / 0.05);
    totalCoins.push((nickels.toString()).concat(" nickel(s)"));

    var pennies = Math.floor((change - (quarters * 0.25) - (dimes * 0.1) - (nickels * 0.05)).toPrecision(2) / 0.01);
    totalCoins.push((pennies.toString()).concat(" penny(ies)"));

    return totalCoins;
};





// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if(!result) {
//       $(".not").text("not");
//     } else {
//       $(".not").text("");
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
