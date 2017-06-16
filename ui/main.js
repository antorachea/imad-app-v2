console.log('Loaded!');
ele = document.getElementById('anto-text');
ele.innerHTML = 'New Value';

//move the image
var img = document.getElementById('anto');
img.onclick = function(){
  img.style.margingLeft = '100px';  
};