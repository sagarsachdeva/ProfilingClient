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
	document.getElementById("#userDataNavig").style.borderStyle = "outset";
	$("#commitVsLOC").hide();
	document.getElementById("#commitVsLocNavig").style.borderStyle = "outset";
	$("#closedIssuesVsComments").hide();
	document.getElementById("#closedIssueVsCommentsNavig").style.borderStyle = "outset";
	$("#openedIssuesVsComments").hide();
	document.getElementById("#openIssueVsCommentsNavig").style.borderStyle = "outset";
}

function showUserData() {
	hideAll();
	$("#userData").show();
	// $("#userDataNavig").css("border-width", "9px");
	document.getElementById("#userDataNavig").style.borderStyle = "inset";

}

function showCommitVsLocPlot() {
	hideAll();
	$("#commitVsLOC").show();
	// $("#commitVsLocNavig").css("border-width", "9px");
	document.getElementById("#commitVsLocNavig").style.borderStyle = "inset";
}

function showClosedIssuesVsCommentsPlot() {
	hideAll();
	$("#closedIssuesVsComments").show();
	// $("#closedIssueVsCommentsNavig").css("border-width", "9px");
	document.getElementById("#closedIssueVsCommentsNavig").style.borderStyle = "inset";
}

function showOpenedIssuesVsCommentsPlot() {
	hideAll();
	$("#openedIssuesVsComments").show();
	// $("#openIssueVsCommentsNavig").css("border-width", "9px");
	document.getElementById("#openIssueVsCommentsNavig").style.borderStyle = "inset";
}

$(document).ready(function(){
	$("#userProfileToolbar").load("userProfileToolbar.html");
	$("#userProfileToolbar").hide();
});