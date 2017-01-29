// 3. Given a string, return the index of the first unique character. (Ex: Given "google", return 4.)

var str = 'google'

function uniqueindex (str){
  var word = str
  var duplicate =[]
  var checker;
  for(var i = 0;i < word.length; i++){
    var flag = false
    var count = 0;
    checker = word[i]
    for(var x = i+1; x<word.length-1; x++){
      if(checker==word[x]){
        duplicate.push(checker)
        count ++
      }
    }
    if(count==0){
        for(var j = 0; j<duplicate.length; j++){
          if(checker==duplicate[j]){
            flag = true
          }
        }
        if(flag == false){
          console.log(i)
          return i
        }
      }

  }
}

uniqueindex(str)
