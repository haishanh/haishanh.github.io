WebFontConfig = {
  google: {
    families: ['Inconsolata:400']
  }
};

(function (d) {
  var $ = d.querySelector.bind(d);

  // load the font
  var wf = d.createElement('script'), s = d.scripts[0];
  wf.src = 'https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.24/webfontloader.js';
  s.parentNode.insertBefore(wf, s);

  // theming
  var haishan = $('#haishan');
  var colors = ['#B6D7F9', '#FFCDCD', '#FFFAA9', '#FFC1E2', '#FFEAD0', '#ABFFE3'];
  var colorIndex = 0;

  var name = $('.name');
  name.addEventListener('click', function (ev) {
    var color = colors[colorIndex++ % colors.length];
    haishan.style.fill = color;
  });

  function job() {
    console.log('\t---------------------------------');
    console.log('\tHey there,');
    console.log('\tI\'m looking for a front end job.');
    console.log('\tI would love to have a talk.');
    console.log('\t---------------------------------');
  }

  job();

  // baffle

  // var gibberish = ['\u2588','\u2593','\u2592','\u2591','\u2588','\u2593','\u2592','\u2591','\u2588','\u2593','\u2592','\u2591','\u003c','\u003e','\u002f'];
  var b = baffle('.words');
  //b.set({characters: gibberish});
  b.set({characters: '+-*='});
  b.once();
  b.reveal(2000, 2500);

})(document)

