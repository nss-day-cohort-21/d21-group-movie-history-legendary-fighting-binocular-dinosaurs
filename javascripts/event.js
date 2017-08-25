"use strict";
var somethingElse = require('./firebase.js');
var fb = require('firebase');
function buttonChanges(){
	$('#unwatched').fadeIn(2000);
	$('#watched').fadeIn(2000);
	$('#untracked').fadeIn(2000);
	$("#loginbutton").css("display","none");
	$('#logoutbutton').css("display", "block");
	$(document).on("click", "#logoutbutton", ()=>{
		$('#unwatched').hide();
		$('#watched').hide();
		$('#untracked').hide();
		$("#loginbutton").css("display","block");
		$('#logoutbutton').css("display", "none");
			 return fb.auth().signOut();
	});

}


module.exports = {buttonChanges};