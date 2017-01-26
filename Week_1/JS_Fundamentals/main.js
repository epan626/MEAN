// question 1: Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
var x =  [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for (item in x){
  console.log(x[item]);
}

// question 2: Add a new value (100) in the array x using a push method.
x.push(100);
for (item in x){
  console.log(x[item]);
}

// question 3: Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
x.push(["hello", "world", "JavaScript is Fun"])
for (item in x){
  console.log(x[item]);
}

// question 4: Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
var j=0;
for(var i = 0; i<=500;i++){
  j+=i;
}
console.log(j)

// question 5: Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
var x = [1, 5, 90, 25, -3, 0]
var holder = x[0]
for(var i = 1; i<=x.length; i++){
  if(x[i]<holder){
    holder = x[i];
  }
}
  console.log(holder)

// question 6: Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
var x = [1, 5, 90, 25, -3, 0]
var sum = 0
for(var i = 0; i<x.length; i++){
  sum = sum + x[i]
}
  console.log(sum)


// questoin 7: Write a for-in loop that will navigate through the object below (or write your own object)
var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for(item in new_ninja){
  console.log(item, new_ninja[item])
}
