var usersList;
$(document).ready(function() {
	console.log("ready!");
	jobDescPageLoad();
});

function jobDescPageLoad() {
	$('#pageContent').html("");
	$('#pageContent').load("jobDesc.html");
}

function welcomePageLoad() {
	$('#pageContent').html("");
	$('#pageContent').load("welcome.html");
	fetchUsers();
}

function jdMacthesPageLoad(data) {
	$('#pageContent').html("");
	$('#pageContent').load("jdMatches.html");
}