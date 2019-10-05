$( document ).ready( function() {

	"use strict";

	// Dropdown in navbar Mobile and Tablet screen
	var alterClass = function() {
		var screenWidth = document.body.clientWidth;
		if ( screenWidth <= 1024 ) {
			$( '.dropdown-toggle' ).attr( {
				'data-toggle' : 'collapse'
			} );
			$( '.dropdown-menu' ).addClass( 'dropdown-menu-mobile' );
			$( '.dropdown-toggle' ).on( 'click', function( e ) {
				if ( document.body.clientWidth <= 1024 ) {
					const targetDropdown = $( $( e.target ).next() [ 0 ] );
					$( targetDropdown ).removeClass( "dropdown-menu" );
					if( !targetDropdown.hasClass( 'collapse in' ) ) {
						// Toggle all collapse to turn off
						$( '.dropdown-menu-mobile' ).collapse( 'hide' )
					}
				}
			})
		} else if ( screenWidth >= 1025 ) {
			$( '.dropdown-menu-mobile' ).addClass( 'dropdown-menu' );
			$( '.dropdown-menu-mobile.dropdown-menu' ).removeClass( 'dropdown-menu-mobile' );
			$( '.dropdown-menu' ).removeClass( 'in' );
			$( '.dropdown-toggle' ).attr( {
				'data-toggle' : 'dropdown'
			} );
		};
	};

	// Function for moving element in why-us section page services when in mobile screen
	var moveExperience = function() {
		var screenWidth = document.body.clientWidth;
		if ( screenWidth <= 1024 ) {
			$( "#why-us .row > .col-md-6.position-relative" ).detach().appendTo( '#why-us .row' );
		} else if ( screenWidth >= 1025 ) {
			$( "#why-us .row > .col-md-6.position-relative" ).detach().prependTo( '#why-us .row' );
		}
	}

	// Function alterClass running when the screen is changed
	$( window ).resize( function() {
		alterClass();
		moveExperience();
	} );

	// Fire it when the page first loads:
	alterClass();
	moveExperience();

	// Close Navbar Mobile
	$( ".close-nav" ).on( 'click' ,function() {
		$( "div" ).removeClass( "navbar-mobile collapse in" );
		$( ".navbar-collapse" ).addClass( "collapse" );
	} );

	// Change navbar for mobile screen
	$( ".navbar-toggle" ).on( 'click', function() {
		$( ".navbar-collapse" ).addClass( "navbar-mobile" );
		$( ".navbar-mobile" ).fadeIn( "slow", function() {
			$( ".navbar-collapse" ).removeAttr( "style" );
		} );
	} );

	// Change background color input when focus
	$( "form :input" ).on( 'focus' ,function( e ) {
		$( e.target ).addClass( "input-focus" );
	 } ).on( 'blur' ,function( e ){
		if( e.target.value.length < 1 ) {
			$( e.target ).removeClass( "input-focus" );
		}
	 } );

	// Initialize Owl Carousel Section Hero
	 $( ".owl-hero" ).owlCarousel( {
		items:1,
		loop:true,
		nav: true,
		navText: ["<i class='icon-arrow-left-circle icons'></i>","<i class='icon-arrow-right-circle icons'></i>"],
		dots: false,
		autoplay: true,
		smartSpeed: 1000
	 } );

	 // Initialize Owl Carousel Section Testimonials
	 $( ".owl-testimonials" ).owlCarousel( {
		items:1,
		loop:true,
		dots: true,
		autoplay: true,
		smartSpeed: 1000
	 } );

	// Change Owl Dots with image
	$( '.owl-testimonials > .owl-dots > button > span' ).each( function( key, n ) {
		$( n ).replaceWith( `<img src=\"assets/img/client0${ key + 1 }.png\"/ >` )
	} ) ;

	// Only Scale Image when hovering the selected image
	$( "#gallery .showcase" ).on( 'mouseover' ,function( e ) {
		$( ( $( e.currentTarget ).find( "img" ) [ 0 ] ) ).addClass( "hover-image" );
		$( ( $( e.currentTarget ).find( ".showcase-overlay" ) [ 0 ] ) ).addClass( "hover-overlay" );
	});
	$( "#gallery .showcase" ).on( 'mouseout' ,function( e ) {
		$( ( $( e.currentTarget ).find( "img" ) [0] ) ).removeClass( "hover-image" );
		$( ( $( e.currentTarget ).find( ".showcase-overlay" ) [ 0 ] ) ).removeClass( "hover-overlay" );
	});
	
} );