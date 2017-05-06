function displayOpenedIssuesVsCommentsPlot(userProfile) {
	$("#openedIssuesVsComments").html("");
	var openedIssuesCommentsArray = populateOpenedIssuesCommentsArray(userProfile);
	if (openedIssuesCommentsArray.length == 0) {
		$("#openedIssuesVsComments").append("<h1>No Data Found</h1>");
		return;
	}

	drawScatterPlot(openedIssuesCommentsArray, "#openedIssuesVsComments");
	$("#openedIssuesVsComments").append(
			"<br><b>No. of Issues</b> : " + openedIssuesCommentsArray.length);
	$("#openedIssuesVsComments").append(
			"<br><b>Mean no. of Comments</b> : "
					+ findMean(openedIssuesCommentsArray));
	$("#openedIssuesVsComments").append(
			"<br><b>Median no. of Comments</b> : "
					+ findMedian(openedIssuesCommentsArray));
}

function populateOpenedIssuesCommentsArray(userProfile) {
	var openedIssuesCommentsArray = new Array();
	var openedIssuesCounter = 1;
	var otherRepos = userProfile.otherRepositories;
	var ownedRepos = userProfile.ownedRepositories;
	var starredRepos = userProfile.starredRepositories;

	for (var i = 0; i < otherRepos.length; i++) {
		var repoOpenedIssues = otherRepos[i].repoOpenedIssues;
		for (var j = 0; j < repoOpenedIssues.length; j++) {
			var noOfComments = repoOpenedIssues[j].issue.noOfComments;

			var obj = {};
			obj["index"] = repoOpenedIssues;
			obj["data"] = noOfComments;
			openedIssuesCommentsArray.push(obj);
			openedIssuesCounter++;
		}
	}

	for (var i = 0; i < ownedRepos.length; i++) {
		var repoOpenedIssues = ownedRepos[i].repoOpenedIssues;
		for (var j = 0; j < repoOpenedIssues.length; j++) {
			var noOfComments = repoOpenedIssues[j].issue.noOfComments;

			var obj = {};
			obj["index"] = repoOpenedIssues;
			obj["data"] = noOfComments;
			openedIssuesCommentsArray.push(obj);
			openedIssuesCounter++;
		}
	}

	for (var i = 0; i < starredRepos.length; i++) {
		var repoOpenedIssues = starredRepos[i].repoOpenedIssues;
		for (var j = 0; j < repoOpenedIssues.length; j++) {
			var noOfComments = repoOpenedIssues[j].issue.noOfComments;

			var obj = {};
			obj["index"] = repoOpenedIssues;
			obj["data"] = noOfComments;
			openedIssuesCommentsArray.push(obj);
			openedIssuesCounter++;
		}
	}

	return openedIssuesCommentsArray;
}