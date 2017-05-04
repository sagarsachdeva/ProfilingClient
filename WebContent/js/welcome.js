function fetchUsers() {
	console.log("welcome page loaded");
	$.ajax({
		contentType : 'application/JSON',
		type : "GET",
		url : "http://localhost:8080/ProfileBuilder/profile/getUsers",
		success : function(result) {
			console.log("successfully fetched results");
			populateUsers(result);
		}
	});
}
function populateUsers(result) {
	usersList = result;
	console.log("Populating Users");
	var selectTag = "";
	$('#usersListSelect').append($('<option>', {
		value : "null",
		text : "None"
	}));
	for (i = 0; i < usersList.length; i++) {
		$('#usersListSelect').append($('<option>', {
			value : usersList[i].id,
			text : usersList[i].name
		}));
	}
}

function fetchUserProfile() {
	console.log("Fetching User Profile");
	var selectedVal = $('#usersListSelect').val();

	if (selectedVal == "null") {
		alert("Please select some value");
		return;
	}

	$.ajax({
		contentType : 'application/JSON',
		type : "GET",
		url : "http://localhost:8080/ProfileBuilder/profile/getUserProfile/"
				+ selectedVal,
		success : function(result) {
			console.log("successfully fetched User Details");
			console.log(result);
			displayUserProfile(result);
		}
	});
}