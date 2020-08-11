'use strict';


let seattleStore = {
   location: 'Seattle'
   minCusHour: 23,
   maxCusHour: 65,
   avgCookieSale: 6.3,
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

seattleStore.renderH1();


let TokyoStore = {
  location: 'Tokyo'
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
  location: 'Dubai'
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
  location: 'Paris'
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
  location: 'Lima'
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
