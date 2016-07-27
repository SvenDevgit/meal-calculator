// array to store the diner objects and make processing them as a group easier
var diners = [];
// function to push the individual diner object to the diners array
function addDiner(diner){
  diners.push(diner);
};
  // constructor functions and prototype changes of the relevant objects for the meal calculator
var Diner = function(name) {
    this.name = name;
    this.meal = [];
};
// Diner prototype
Diner.prototype.getName = function(){
   return this.name;
};
Diner.prototype.addMealDish = function(dish){
  this.meal.push(dish);

};
Diner.prototype.getMeal = function(){
  return this.meal;
};
Diner.prototype.getMealPrice = function(){
  var mealPrice = 0;
  for (let dish of this.meal){
       mealPrice = mealPrice + dish.price;   
  }
  return mealPrice;
};
// Dish constructor function 
var Dish = function(name, price){
    this.name = name;
    this.price = price;
};
// Dish prototype
Dish.prototype.getDishName = function(){
   return this.name;
};
Dish.prototype.getDishPrice = function(){
   return this.price;
};
// fucntions
function getTotalMealPrice(){
  var totalMealPrice = 0;
  for (let diner of diners){
       //console.log(diner); 
       totalMealPrice = totalMealPrice + diner.getMealPrice();
  };
  return totalMealPrice;
};
//
function roundToTwo(number) {    
    return +(Math.round(number + 'e+2')  + 'e-2');
};
//
function getPercentageAmount (mealPrice, percentage){
  percAmount = (mealPrice/100) * percentage;
    return roundToTwo(percAmount);
};
// produce the bill for the diners in question
function produceBill(){
  console.log('Bill');
  totalMealPrice = getTotalMealPrice();
  taxAmount = getPercentageAmount(totalMealPrice, 21);
  tipAmount = getPercentageAmount(totalMealPrice, 12);
  mealPrice = 0;
  mealTax = 0; 
  mealTip = 0; 
  mealTotal = 0;
  grandTotal = totalMealPrice + taxAmount + tipAmount;
   // loop through the diners array
   for (let diner of diners){
     mealPrice = diner.getMealPrice();
     mealTax = getPercentageAmount(diner.getMealPrice(),21);
     mealTip = roundToTwo(tipAmount/2);
     mealTotal = mealPrice + mealTax + mealTip;
     console.log('Diner ' + diner.getName());
     console.log( ' Meal Price ' + mealPrice
              + ' Tax ' + mealTax
              + ' Tip ' + mealTip);
     console.log(' Meal Total ' + mealTotal);
   }
   console.log('Total Meal Price ' + totalMealPrice + ' Total Tax ' + taxAmount + ' Total Tip ' + tipAmount); 
   console.log('Grand Total ' + grandTotal);
};
//console.log('ready to go');
// dishes instances
var pizza = new Dish('Pizza',7);
var tomatoSoup = new Dish('Toamato Soup', 3.50);
var steak = new Dish('Steak', 8.75);
var chicken = new Dish('Chicken',6.75);
var salad = new Dish('Salad', 3.25);
var beer = new Dish('Beer', 2.20);
var wine = new Dish('Wine',2.75);
var cocacola = new Dish('Coca Cola', 1.75);
// diner instances 
var peter = new Diner('Peter');
peter.addMealDish(tomatoSoup);
peter.addMealDish(pizza);
peter.addMealDish(beer);
// add peter to the dishes array
addDiner(peter);
var suzan = new Diner('Suzan');
suzan.addMealDish(salad);
suzan.addMealDish(steak);
suzan.addMealDish(wine);
// add suzan to the dishes array
addDiner(suzan);
// next step make produce bill and print bill seperate, one for setting one for layout
produceBill();
//