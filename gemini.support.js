define([], function(){

  var support = {};

  support.vendors = 'Khtml Ms O Moz Webkit';

  support.checkSupport = function(feature, test){
    var bool = test();
    support[feature] = bool;
    document.documentElement.className += ' ' + (bool ? 'yes' : 'no') + '-' + feature;
  };

  /*
  Test fo CSS Properties
  --------------------------
  http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-detect-css-support-in-browsers-with-javascript/
  */
  support.testProp = function(prop){
    var div = document.createElement('div'),
      vendors = support.vendors.split(' '),
      len = vendors.length;

    if ( prop in div.style ) return true;

    prop = prop.replace(/^[a-z]/, function(val) {
      return val.toUpperCase();
    });

    while(len--) {
      if ( vendors[len] + prop in div.style ) {
        return true;
      }
    }
    return false;
  };

  /* TOUCH EVENTS
  --------------------------
  This checks if there's support for touch events, not if it's a touch device.
  This function is from Modernizr - http://www.github.com/Modernizr/Modernizr/
  */
  support.checkSupport('touch', function() {
    return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
  });

  /* CSS3 Columns
  --------------------------
  Test for CSS3 Column support
  */
  support.checkSupport('columnCount', function() {
    return support.testProp('columnCount');
  });

  /* HTML5 Canvas
  --------------------------
  http://stackoverflow.com/questions/2745432/best-way-to-detect-that-html5-canvas-is-not-supported
  */
  support.checkSupport('canvas', function() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  });

  /* Placeholder
  --------------------------
  */

  support.checkSupport('placeholder', function(){
    return ('placeholder' in document.createElement('input') ||
            'placeholder' in document.createElement('textarea'));
  });

  return support;

});
