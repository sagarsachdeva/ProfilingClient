function displayUserProfile(userProfile) {
	// loadToolbar();
	$("#userProfileToolbar").show();
	displayUserData(userProfile);
	displayCommitVsLocPlot(userProfile);
	displayClosedIssuesVsCommentsPlot(userProfile);
	displayOpenedIssuesVsCommentsPlot(userProfile);
	showUserData();
}

function hideAll() {
	$("#userData").hide();
	$("#commitVsLOC").hide();
	$("#closedIssuesVsComments").hide();
	$("#openedIssuesVsComments").hide();
	document.getElementById("#userDataNavig").style.borderStyle = "outset";
	document.getElementById("#commitVsLocNavig").style.borderStyle = "outset";
	document.getElementById("#closedIssueVsCommentsNavig").style.borderStyle = "outset";
	document.getElementById("#openIssueVsCommentsNavig").style.borderStyle = "outset";
}

function showUserData() {
	hideAll();
	$("#userData").show();
	document.getElementById("#userDataNavig").style.borderStyle = "inset";

}

function showCommitVsLocPlot() {
	hideAll();
	$("#commitVsLOC").show();
	document.getElementById("#commitVsLocNavig").style.borderStyle = "inset";
}

function showClosedIssuesVsCommentsPlot() {
	hideAll();
	$("#closedIssuesVsComments").show();
	document.getElementById("#closedIssueVsCommentsNavig").style.borderStyle = "inset";
}

function showOpenedIssuesVsCommentsPlot() {
	hideAll();
	$("#openedIssuesVsComments").show();
	document.getElementById("#openIssueVsCommentsNavig").style.borderStyle = "inset";
}

$(document).ready(function() {
	$("#userProfileToolbar").load("userProfileToolbar.html");
	$("#userData").load("userData.html");
	$("#userProfileToolbar").hide();
	$("#userData").hide();
});