var coinCombo = function(change) {
    var totalCoins = [];


    var quarters = Math.floor(change / 0.25);
    totalCoins.push((quarters.toString()).concat(" quarters"));

    var dimes = Math.floor((change - (quarters * 0.25)).toPrecision(2) / 0.1);
    totalCoins.push((dimes.toString()).concat(" dimes"));

    return totalCoins;

};




//   if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
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
