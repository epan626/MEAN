var _ = {
find: function(arr, callback) {
  for(var i = 0; i<arr.length; i++){
    if(callback(arr[i])){
      return arr[i]
    }
  }
  return undefined
},

reject: function(arr, callback) {
 var array = []
 for(var i = 0;i<arr.length; i++){
   if(!callback(arr[i])) {
     array.push(arr[i]);
   }
 }
 return array
},

filter: function(arr, callback){
 var array = []
 for(var i = 0;i<arr.length; i++){
   if (callback(arr[i])){
     array.push(arr[i]);
    }
  }
return array
},


map: function(arr, callback){
  var array=[]
  for(var i = 0; i<arr.length; i++){
    array.push(callback(arr[i]));
  }
  return array;
},

reduce: function(arr, callback) {
  var sum = 0;
  for(var i = 0; i<arr.length; i++){
    sum = callback(sum,arr[i])
  }
  return sum
}

}

// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// console.log(sum)

// var even = _.find([1, 1, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//
// console.log(even)

// var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(odds)
