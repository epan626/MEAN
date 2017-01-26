// Q1 Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
// function sumBtwn(x,y){
//   var sum = 0;
//   if(x>=0 && y>=0){
//     if(x==y){
//       return console.log(sum)
//     }
//     if (x<y){
//       var lower = x;
//       var dif = y-x+1;
//       while(dif!=0){
//         sum = sum + lower;
//         lower += 1;
//         dif -= 1;
//         }
//       }
//     if (!x<y){
//       var lower = y;
//       var dif = x-y+1;
//       while(dif!=0){
//         sum = sum + lower;
//         lower += 1;
//         dif -= 1;
//         }
//       }
//     }
//     if(x<=0 && y<=0){
//       if(x==y){
//         return console.log(sum)
//       }
//       if (x<y){
//         var lower = x;
//         var dif = Math.abs(x)-Math.abs(y);
//         while(dif!=0){
//           sum = sum + lower;
//           lower += 1;
//           dif -= 1;
//           }
//         }
//       if (!x<y){
//         var lower = y;
//         var dif = Math.abs(y)-Math.abs(x);
//         while(dif!=0){
//           sum = sum + lower;
//           lower += 1;
//           dif -= 1;
//           }
//         }
//         return console.log(sum)
//       }
//     if(x<=0 || y<=0){
//         if(x==y){
//           return console.log(sum)
//         }
//         if (x<y && y>=0){
//           var lower = x;
//           var dif = Math.abs(x)+y+1;
//           while(dif!=0){
//             sum = sum + lower;
//             lower += 1;
//             dif -= 1;
//             }
//             console.log(sum)
//           }
//         if (y<x && y<=0){
//           var lower = y;
//           var dif = Math.abs(y)+x+1;
//           while(dif!=0){
//             sum = sum + lower;
//             lower += 1;
//             dif -= 1;
//             }
//           }
//           return console.log(sum)
//       }
//         console.log(sum)
//   }

// Q2 Write a loop that will go through an array, find the minimum value, and then return it
// function minval(arr){
//   var holder = arr[0];
//   for(var i = 1; i<arr.length; i++){
//     if(holder>arr[i]){
//       holder = arr[i];
//     }
//   }
//   console.log(holder);
// // }

// Q3 Write a loop that will go through an array, find the average of all of the values, and then return it
// function sumarr(arr){
//   var holder = arr[0];
//   for(var i = 1; i<arr.length; i++){
//     holder += arr[i];
//     }
//     console.log(holder/arr.length);
//   }
// Q4 Rewrite these as methods of an object
// var somemath = {
//   sumbtwnfunc: function sumBtwn(x,y){
//     var sum = 0;
//     if(x>=0 && y>=0){
//       if(x==y){
//         return console.log(sum)
//       }
//       if (x<y){
//         var lower = x;
//         var dif = y-x+1;
//         while(dif!=0){
//           sum = sum + lower;
//           lower += 1;
//           dif -= 1;
//           }
//         }
//       if (!x<y){
//         var lower = y;
//         var dif = x-y+1;
//         while(dif!=0){
//           sum = sum + lower;
//           lower += 1;
//           dif -= 1;
//           }
//         }
//       }
//       if(x<=0 && y<=0){
//         if(x==y){
//           return console.log(sum)
//         }
//         if (x<y){
//           var lower = x;
//           var dif = Math.abs(x)-Math.abs(y);
//           while(dif!=0){
//             sum = sum + lower;
//             lower += 1;
//             dif -= 1;
//             }
//           }
//         if (!x<y){
//           var lower = y;
//           var dif = Math.abs(y)-Math.abs(x);
//           while(dif!=0){
//             sum = sum + lower;
//             lower += 1;
//             dif -= 1;
//             }
//           }
//           return console.log(sum)
//         }
//       if(x<=0 || y<=0){
//           if(x==y){
//             return console.log(sum)
//           }
//           if (x<y && y>=0){
//             var lower = x;
//             var dif = Math.abs(x)+y+1;
//             while(dif!=0){
//               sum = sum + lower;
//               lower += 1;
//               dif -= 1;
//               }
//               console.log(sum)
//             }
//           if (y<x && y<=0){
//             var lower = y;
//             var dif = Math.abs(y)+x+1;
//             while(dif!=0){
//               sum = sum + lower;
//               lower += 1;
//               dif -= 1;
//               }
//             }
//             return console.log(sum)
//         }
//           console.log(sum)
//     },
//   minivalfunc: function minval(arr){
//     var holder = arr[0];
//     for(var i = 1; i<arr.length; i++){
//       if(holder>arr[i]){
//         holder = arr[i];
//       }
//     }
//     console.log(holder);
//   },
//   sumarrfunc: function sumarr(arr){
//     var holder = arr[0];
//     for(var i = 1; i<arr.length; i++){
//       holder += arr[i];
//       }
//       console.log(holder/arr.length);
//     },
// }
//
// x = [1,2,3,-1]
// somemath.sumarrfunc(x)

// Q5 Object properties
// var person = {
//   name: 'Eric',
//   distance_traveled: 0,
//   say_name: function say_name(){
//     console.log(person['name'])},
//   say_something: function say_something(str){
//     console.log(person['name'] + ' says ' + str);
//   },
//   walk: function walk(){
//     console.log(person['name'] + ' is walking');
//     person['distance_traveled'] += 3;
//   },
//   run: function run(){
//     console.log(person['name'] + ' is running');
//     person['distance_traveled'] += 10;
//   },
//   crawl: function crawl(){
//     console.log(person['name'] + ' is crawling');
//     person['distance_traveled'] += 1;
//   },
// }
//
// person.walk()
// person.walk()
// console.log(person.distance_traveled)
