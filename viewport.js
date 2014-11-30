template = [
  '<span class="width">',
  '<span class="width-val">',
  '???',
  '</span>',
  '<span class="label">',
  'W',
  '</span>',
  '</span>',
  '&times;',
  '<span class="height">',
  '<span class="height-val">',
  '???',
  '</span>',
  '<span class="label">',
  'H',
  '</span>',
  '</span>'
].join('');


drawElement = function(){
  var el = document.createElement('div');
  el.id = 'viewport';
  el.innerHTML = template;
  document.body.appendChild(el);
};

updateViewport = function(){
  dde = document.documentElement;
  viewportDisplay = document.getElementById('viewport');
  viewportDisplay.querySelector('.width-val').textContent = dde.clientWidth;
  viewportDisplay.querySelector('.height-val').textContent = dde.clientHeight;
};

drawElement();
updateViewport();
window.addEventListener('resize', updateViewport, false);
