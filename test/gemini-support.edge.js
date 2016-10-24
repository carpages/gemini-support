/* eslint key-spacing: ["error", { "align": "colon" }] */
requirejs.config({
  baseUrl: '../'
});

require([ 'gemini.support' ], function( support ) {
  console.log( support );
});
