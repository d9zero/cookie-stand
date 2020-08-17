'use strict';

var storeHoursArr = ['6am', '7am', '8m', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

Location.prototype.render = function(){
  var tableRow = document.createElement('tr');
  for(var i=0; i<storeHoursArr.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerHour[i];
    tableRow.appendChild(tableData);
}
var totalDailySales = document.createElement('td');
totalDailySales.textContent = this.totalCookiesForTheDay;
tableRow.appendChild(totalDailySales);
parent.appendChild(tableRow)
}



console.log(customerPerHour)

var seattle = new Location(23, 65, 6.3, 'seattle');
var tokyo = new Location(3, 24, 1.2, 'tokyo');
var dubai = new Location(11, 38, 3.7, 'dubai');
var paris = new Location(20, 38, 2.3, 'paris');
var lima = new Location(2, 16, 4.6, 'lima');

function generateHeader(){
  var tableRow = document.createElement('tr');

    for(var i=0; i<storeHoursArr.length; i++){
      var tableheader = document.createElement('th');
      tableheader.textContent = storeHoursArr[i];
      tableRow.appendChild(tableheader);
    }
    parent.appendChild(tableRow);
}

for (var i = 0; i<allLocations.length; i++){
  allLocations[i].projectedCustomers();
  allLocations[i].cookiesSales();
  allLocations[i].render();
}

generateHeader();
generateContent();