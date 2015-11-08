var ind = function (x) {
	return x*10;
}
console.log(ind(7));
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running",
           "television"],
 ind1: function (x) {
	 console.log(this.events[x]);
 } 
};
// var ind1= function(x){
// 	console.log(day1.events[x]);
// }