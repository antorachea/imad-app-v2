console.log('Loaded!');
ele = document.getElementById('anto-text');
ele.innerHTML = 'New Value';

var img = document.getElementById('anto');
img.onclick = function() {
  img.style.marginLeft = '100px';  
};