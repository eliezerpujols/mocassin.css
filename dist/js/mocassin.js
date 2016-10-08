/*!
	Mocassin CSS v1.3.0 |  https://wideckop.github.io/mocassin.css/
	Licensed under the MIT license

	Copyright (c) 2016 Eliezer Pujols (Wideckop)
*/

( function( window ) {
	// Modernizr TouchStart
	if( Modernizr.touch ) {
		function classReg( className ) {
			return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
		}

		// classList support for class management
		var hasClass, addClass, removeClass;

		if ( 'classList' in document.documentElement ) {
			hasClass = function( elem, c ) {
				return elem.classList.contains( c );
			};
			addClass = function( elem, c ) {
				elem.classList.add( c );
			};
			removeClass = function( elem, c ) {
				elem.classList.remove( c );
			};
		}
		else {
			hasClass = function( elem, c ) {
				return classReg( c ).test( elem.className );
			};
			addClass = function( elem, c ) {
				if ( !hasClass( elem, c ) ) {
					elem.className = elem.className + ' ' + c;
				}
			};
			removeClass = function( elem, c ) {
				elem.className = elem.className.replace( classReg( c ), ' ' );
			};
		}

		function toggleClass( elem, c ) {
			var fn = hasClass( elem, c ) ? removeClass : addClass;
			fn( elem, c );
		}

		var mocassin = {
			hasClass: hasClass,
			addClass: addClass,
			removeClass: removeClass,
			toggleClass: toggleClass
		};

		// transport
		if ( typeof define === 'function' && define.amd ) {
			// AMD
			define( mocassin );
		} else {
			// browser global
			window.mocassin = mocassin;
		}

		[].slice.call( document.querySelectorAll( '.mc-item' ) ).forEach( function( el, i ) {
			el.querySelector( '.mc-item a' ).addEventListener( 'touchstart', function(e) {
				e.stopPropagation();
			}, false );

			el.addEventListener( 'touchstart', function(e) {
				mocassin.toggleClass( this, 'touch' );
			}, false );
		});
	}
})( window );
