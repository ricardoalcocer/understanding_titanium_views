/*
Full reference: 
http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Window-property-orientationModes
*/

// these constants are for convenience and readability 
var LANDSCAPE=0;
var PORTRAIT=1;

// get startup orientation
$.index.addEventListener('open',function(e){
	console.log("Startup Orientation: " + e.source.orientation);
	// here you react to the startup orientation
	if (e.source.orientation === Ti.UI.LANDSCAPE_LEFT || e.source.orientation === Ti.UI.LANDSCAPE_RIGHT){
		updateUI(LANDSCAPE);
	}else{
		updateUI(PORTRAIT);
	}

	if (OS_ANDROID){
		// this is not strictly necesary for setting the ActionBar title, but it's 
		// good to have it here for other ActionBar-related operations
		var actionBarHelper = require('actionbarhelper')(e.source);	
	 	actionBarHelper.setTitle(e.source.title);
	}
})
//

// listen for orientation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
  	console.log("Orientation changed to: " + e.orientation);
  	// here you react to the change in orientation
	if (e.orientation === Ti.UI.LANDSCAPE_LEFT || e.orientation === Ti.UI.LANDSCAPE_RIGHT){
		updateUI(LANDSCAPE);
	}else{
		updateUI(PORTRAIT);
	}
});
//

function updateUI(isPortrait){
	// here you update the UI based on the current orientation
	if (isPortrait){
		console.log('Adjusting for portrait');
		$.win.getView("top").height="33.3%";
		$.win.getView("center").height="33.3%";
		$.win.getView("bottom").height="33.3%";
	}else{
		console.log('Adjusting for landscape');
		$.win.getView("top").height="50%";
		$.win.getView("center").height="50%";
		$.win.getView("bottom").height="0%";
	}
}

$.index.open();
