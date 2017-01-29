// 1. Given an N different open and close braces in a string "( { [ } ] )", check whether the string has matching braces. Return true if the braces match, false otherwise.

  var str = "[(){}][]]"

  var checker = []

function checkbraces(str){

  for(var i = 0; i<str.length; i++){

      if(str[i] == '(' || str[i] == '{' || str[i] =='['){
      checker.push(str[i])
    }
     else if(str[i]==')'){
      if(checker[checker.length-1]=='('){
        checker.pop()
      } else {
        console.log('false')
        return false
      }
    }
    else if(str[i]=='}'){
      if(checker[checker.length-1]=='{'){
        checker.pop()
      } else {
        console.log('false')
        return false
      }
    }
     else if (str[i]==']'){
      if(checker[checker.length-1]=='['){
        checker.pop()
    } else {
      console.log('false')
      return false
    }
  }
}
   if(checker.length == 0){
      console.log('true')
    } else {
      console.log('false')
    }
}

checkbraces(str)
