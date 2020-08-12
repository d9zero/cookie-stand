'use strict';

var storeHoursArr = ['6am', '7am', '8m', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattleStore = {
   location: 'Seattle',
   minCusHour: 23,
   maxCusHour: 65,
   avgCookieSale: 6.3,
   dailySales: [],


  
  numberofGuests: function(){
    return Math.ceil(Math.random() * (this.maxCusHour -this.minCusHour +1) + this.minCusHour)
  },

  sales: function(guestsperhour) {
    return Math.ceil(guestsperhour * this.avgCookieSale);
  },

  generateDailySales: function(){
    for (var i = 0; i < storeHoursArr.length; i++){
      var projectedCustomers = this.numberOfGuests()
      var cookiesSales = this.sales(projectedCustomers)
      this.dailySales.push(cookiesSales)
    }
  },
  
  render: function(){
    var list = document.getElementById('Sales');
    var listElement = document.createElement('li');
    listElement.textcontent = this.name;
    list.appendChild(listElement);
    for (var i = 0; i < storeHoursArr.length; i++){
      var time = document.createElement('li');
      time.textCont = `${storeHoursArr[i]}: ${this.dailySales[i]} cookies`
      list.appendChild(time); 
    }

  
Seattle.generateDailySales();
SeattleStore.render();

  // cookiesPerHour: function() {
  //   let cookiesPerHourArr = [];
  //   for (let i = 0; i < 14; i++) {
  //     cookiesPerHourArr.push(i + 6 + 'am: ' + Math.ceil(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour) + ' cookies');
  //   }
  //   return cookiesPerHourArr;
  // },

  // renderH1:function(){
  //   let parent = document.getElementById('part');
  //   let subHeader = document.createElement('h1').textCont = `${this.location}`;
  //   parent.appendChild(subHeader);
  // }


Location.prototype.render = function {
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


  // var seattle = new Location(23, 65, 6.3, 'seattle');
// var tokyo = new Location(3, 24, 1.2, 'tokyo');
// var dubai = new Location(11, 38, 3.7, 'dubai');
// var paris = new Location(20, 38, 2.3, 'paris');
// var lima = new Location(2, 16, 4.6, 'lima');
fucntion generateHeader(){
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
  allLocations[i.render();
}

generateHeader();
generateContent();
  
// refactoring above this line^ 60+

let TokyoStore = {
  location: 'Tokyo',
  minCusHour: 3,
  maxCusHour: 24,
  avgCookieSale: 1.2,
 //cookieJar: this.cookiePerHour(),

 cookiesPerHour: function() {
   let cookiesPerHourArr = [];
   for (let i = 0; i < 14; i++) {
     cookiesPerHourArr.push(i + 6 + 'am: ' + Math.ceil(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour) + ' cookies');
   }
   return cookiesPerHourArr;
 },

 renderH1:function(){
   let parent = document.getElementById('part');
   let subHeader = document.createElement('h1').textCont = `${this.location}`;
   parent.appendChild(subHeader);
 }



};

TokyoStore.renderH1();

let DubaiStore = {
  location: 'Dubai',
  minCusHour: 11,
  maxCusHour: 38,
  avgCookieSale: 3.7,
 //cookieJar: this.cookiePerHour(),

 cookiesPerHour: function() {
   let cookiesPerHourArr = [];
   for (let i = 0; i < 14; i++) {
     cookiesPerHourArr.push(i + 6 + 'am: ' + Math.ceil(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour) + ' cookies');
   }
   return cookiesPerHourArr;
 },

 renderH1:function(){
   let parent = document.getElementById('part');
   let subHeader = document.createElement('h1').textCont = `${this.location}`;
   parent.appendChild(subHeader);
 }



};

DubaiStore.renderH1();

let ParisStore = {
  location: 'Paris',
  minCusHour: 20,
  maxCusHour: 38,
  avgCookieSale: 2.3,
 //cookieJar: this.cookiePerHour(),

 cookiesPerHour: function() {
   let cookiesPerHourArr = [];
   for (let i = 0; i < 14; i++) {
     cookiesPerHourArr.push(i + 6 + 'am: ' + Math.ceil(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour) + ' cookies');
   }
   return cookiesPerHourArr;
 },

 renderH1:function(){
   let parent = document.getElementById('part');
   let subHeader = document.createElement('h1').textCont = `${this.location}`;
   parent.appendChild(subHeader);
 }



};

ParisStore.renderH1();

let LimaStore = {
  location: 'Lima',
  minCusHour: 2,
  maxCusHour: 16,
  avgCookieSale: 4.6,
 //cookieJar: this.cookiePerHour(),

 cookiesPerHour: function() {
   let cookiesPerHourArr = [];
   for (let i = 0; i < 14; i++) {
     cookiesPerHourArr.push(i + 6 + 'am: ' + Math.ceil(Math.random() * (this.maxCusHour - this.minCusHour) + this.minCusHour) + ' cookies');
   }
   return cookiesPerHourArr;
 },

 renderH1:function(){
   let parent = document.getElementById('part');
   let subHeader = document.createElement('h1').textCont = `${this.location}`;
   parent.appendChild(subHeader);
 }



};

LimaStore.renderH1();
