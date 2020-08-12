let t = "red";
function changeColor(event) {
  if( t == "red"){
    event.currentTarget.style.backgroundColor = 'red';
    t = 'blue';
  }else{
    event.currentTarget.style.backgroundColor = 'blue';
    t = "red";
  }
}

let elements = document.querySelectorAll('div');

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', changeColor);
}