console.log('Loaded!');
var button = document.getElementById('counter');
button.onclick = function(){
  
  //Render the varialbe in the current span
  counter = counter + 1;
  var span = document.getElementById('clicked');
  span.innerHTML = counter.toString();
};