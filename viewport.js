template = [
  '<span class="width">',
  '<span class="width-val">',
  '???',
  '</span>',
  '<span class="label">',
  'W',
  '</span>',
  '</span>',
  '<span class="separator">&times;</span>',
  '<span class="height">',
  '<span class="height-val">',
  '???',
  '</span>',
  '<span class="label">',
  'H',
  '</span>',
  '</span>'
].join('');


init = function(){
  var el = document.createElement('div');
  el.id = 'viewport';
  el.innerHTML = template;
  document.body.appendChild(el);
  updateViewport();
};

updateViewport = function(){
  dde = document.documentElement;
  viewportDisplay = document.getElementById('viewport');
  viewportDisplay.querySelector('.width-val').textContent = dde.clientWidth;
  viewportDisplay.querySelector('.height-val').textContent = dde.clientHeight;
};

window.addEventListener('resize', updateViewport, false);
init();
