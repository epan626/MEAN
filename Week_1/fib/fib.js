function fib() {
  var sum = 0;
  var start = 0;
  var pre1 = 1;
  function nacci() {
    if(sum==0){
      sum = 1
      console.log(sum)
      return nacci
    }
    else{
      sum += start
      start = pre1
      pre1= sum
      console.log(sum)
    }
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter()
fibCounter()
