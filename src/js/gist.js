/*-----------------------------------------------------------------
GIST: VCARD THEME
@author: Pranav Rele
@version: 1.0
------------------------------------------------------------------*/

$(document).ready(function() {
	
	"use strict";
	
	// Disable :hover on mobile devices
	document.addEventListener('touchstart', function addtouchclass(e) {
		
		document.documentElement.classList.add('can-touch');
		
    	document.removeEventListener('touchstart', addtouchclass, false);

		}, false);
	
});