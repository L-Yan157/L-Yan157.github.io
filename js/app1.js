var layers = document.querySelectorAll('.parallax-layer');

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  for (var i = 0; i < layers.length; i++) {
    var depth = parseFloat(layers[i].style.transform.split(' ')[1]);
    var translate3dValue = scrollTop * depth;
    layers[i].style.transform = 'translate3d(0, ' + translate3dValue + 'px, 0)';
  }
});