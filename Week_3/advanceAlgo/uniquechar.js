// 2. Given a string, return a string with only the unique characters. (Ex: "Mississippi" to "Misp").

var str = 'Mississippi'

function noRepeat(str){
  var checker = [str[0]]

  for(var i = 1; i<str.length; i++){
      var flag = false;
    for(var x = 0; x<checker.length; x++){
      if(str[i].toUpperCase()==checker[x].toUpperCase()){
        flag = true
      }
    }
    if(flag == false){
      checker.push(str[i].toUpperCase())
    }
  }
  console.log(checker)
}

noRepeat(str)
