var $Dojo = {
  click: (function(callback) {
    var button = document.getElementById('button')
    button.addEventListener("click", dothis);
  })(dothis),
  hover: (function(callback2, callback3){
    var button = document.getElementById('button')
    button.addEventListener("mouseover", dothis2);
    button.addEventListener("mouseout", dothis3);
  })(dothis, dothis3)
}

function dothis() {
  console.log('click')
}

function dothis2(){
  console.log('over')
}

function dothis3(){
  console.log('out')
}
