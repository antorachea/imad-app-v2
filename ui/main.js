console.log('Loaded!');
ele = document.getElementById('anto-text');
ele.innerHTML = 'New Value';

var img = document.getElementById('anto');
var moveleft = 0;
function moveright(){
moveleft = moveleft + 10;
img.style.marginLeft = moveleft + 'px';
}
img.onclick = function(){
  var int = setInterval(moveright, 100);  
};