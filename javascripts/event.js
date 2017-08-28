"use strict";
var somethingElse = require('./firebase.js');
var fb = require('firebase');
function buttonChanges(){
	$('#unwatched').fadeIn(2000);
	$('#watched').fadeIn(2000);
	$('#untracked').fadeIn(2000);
	$('#favorites').fadeIn(2000);
	$('#profile-image-anchor').fadeIn(2000);
	$("#loginbutton").css("display","none");
	$('#logoutbutton').css("display", "block");
	$(document).on("click", "#logoutbutton", ()=>{
		$('#unwatched').hide();
		$('#watched').hide();
		$('#untracked').hide();
        $('#favorites').hide();
        $('#profile-img').css("display", "none");
		$("#loginbutton").css("display","block");
		$('#logoutbutton').css("display", "none");
		logoutSearchBar();
			 return fb.auth().signOut();
	});

}

function addPhotoAfterLogin (photoURL) {
	$("#profile-image-anchor").append(
		`<img src="${photoURL}" id="profile-img" class="flex-sm-fill">`
	);
}
function logoutSearchBar(){
        $('#watchedSI').hide();
        $('#unwatchedSI').hide();
        $('#searchInput').css("display", "block");
}




module.exports = {buttonChanges, addPhotoAfterLogin, logoutSearchBar};