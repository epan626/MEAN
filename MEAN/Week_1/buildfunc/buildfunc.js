// var runningLogger = function(){
//   console.log('I am running!')};
// runningLogger();

// function multiplyByTen(x){
//   return(x*10)
// }
// multiplyByTen(5);

// function stringReturnOne(){
//   console.log('hello');
// }
//
// function stringReturnTwo(){
//   console.log('sup');
// }
// stringReturnTwo();
// stringReturnOne();
//

// function caller(x){
//   if(!typeof x === 'function'){
//     return
//   }
// }
//
// var k = function(){
//   console.log('hello')
// }
// caller(k())

// function myDoubleConsoleLog(para1, para2){
//   if(typeof(para1) === 'function' && typeof(para2) ==='function'){
//     console.log(para1(), para2())
//   }
// }
// myDoubleConsoleLog(stringReturnOne(), stringReturnTwo())

// function caller2(para){
//   console.log('starting');
//   setTimeout(function(){
//     if(typeof(para) == 'function'){
//       console.log('counting');
//       para(stringReturnOne(), stringReturnTwo());
//     }
//   }, 2000);
//   console.log('ending');
//   return 'interesting';
// }
//
// caller2(myDoubleConsoleLog);
