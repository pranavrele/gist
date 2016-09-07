/*-----------------------------------------------------------------
GIST: VCARD TEMPLATE
@author: Pranav Rele
@version: 1.0
------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	// Disable :hover on mobile devices
	var touch = window.ontouchstart || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoint > 0);
	
	if (touch) {
		try {
			for (var si in document.styleSheets) {
				var styleSheets = document.styleSheets[si];
				
				if (!styleSheet.rules) continue;
				
				for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
					if (!styleSheet.rules[ri].selectorText) continue;
					
					if (styleSheet.rules[ri].selectorText.match(':hover')) {
						styleSheet.deleteRule(ri);
					}
				}
			}
		} catch (ex) {}
	}
});