// dw-appbar
(function( $ ){
  "use strict"
  var scripts = document.getElementsByTagName("script");
  var urlBase = scripts[scripts.length-1].src;
  urlBase = urlBase.replace('dw-appbar_es5.js', '');
  urlBase = urlBase.replace('dw-appbar.js', '');

  // some glocal vars

  // Public methods
  let api = {
    init : function(options) {
      const $el = $(this);
      $el.attr('class','dw-appbar');
    },
    destroy: function(){
      // const $el = $(this);
      // $el.empty();
      // $el.removeClass('dw-appbar');
    }
  }

  // Private methods
  let methods = {

  }

  // Events
  let events = {

  }

  // jquery component stuff
  $.fn.dwAppbar = function(methodOrOptions) {
      if ( api[methodOrOptions] ) {
          return api[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ))
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
          // Default to "init"
          return api.init.apply( this, arguments )
      } else {
          $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.appBar' )
      }
  };


})( jQuery )
