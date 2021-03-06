/*
	Aerial 1.0 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
// ymaps.ready(init);
//
// function init() {
//     var myMap = new ymaps.Map("map", {
//             center: [55.76, 37.64],
//             zoom: 10
//         }, {
//             searchControlProvider: 'yandex#search'
//         });
// 			document.getElementById('destroyButton').onclick = function () {
// 			 // Для уничтожения используется метод destroy.
// 			 myMap.destroy();
// 	 };
// };

// Skel.
	skel.init({
		reset: 'full',
		breakpoints: {
			'global': { range: '*', href: '/assets/css/style.css', lockViewport: true, viewport: 'minimal-ui' },
			'wide': { range: '-1680', href: '/assets/css/style-wide.css' },
			'normal': { range: '-1280', href: '/assets/css/style-normal.css' },
			'mobile': { range: '-640', href: '/assets/css/style-mobile.css' },
			'mobilep': { range: '-360', href: '/assets/css/style-mobilep.css' }
		}
	});

// Events (JS).

	// Remove "loading" class once the page has fully loaded.
		window.onload = function() {
			document.body.className = '';
		}

	// Prevent scrolling on touch.
		window.ontouchmove = function() {
			return false;
		}

	// Fix scroll position on orientation change.
		window.onorientationchange = function() {
			document.body.scrollTop = 0;
		}

/*

// Events (jQuery).
// Aerial doesn't need jQuery, but if you're going to use it anyway remove the
// block of JS events above and use the jQuery-based ones below instead.

	$(window)

		// Remove "loading" class once the page has fully loaded.
			.on('load', function() {
				$('body').removeClass('loading');
			})

		// Prevent scrolling on touch.
			.on('touchmove', function() {
				return false;
			})

		// Fix scroll position on orientation change.
			.on('orientationchange', function() {
				$('body').scrollTop(0);
			});

*/
