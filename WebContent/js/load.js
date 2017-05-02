var usersList;
$(document).ready(function() {
	console.log("ready!");
	$('#pageContent').load("welcome.html");
	fetchUsers();
});