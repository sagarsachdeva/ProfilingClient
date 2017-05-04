function displayClosedIssuesVsCommentsPlot(userProfile) {
	var closedIssuesCommentsArray = populateClosedIssuesCommentsArray(userProfile);
	if (closedIssuesCommentsArray.length == 0) {
		$("#closedIssuesVsComments").append("<h1>No Data Found</h1>");
		return;
	}

	drawScatterPlot(closedIssuesCommentsArray, "#closedIssuesVsComments");
	$("#closedIssuesVsComments").append(
			"<br><b>No. of Comments</b> : " + closedIssuesCommentsArray.length);
	$("#closedIssuesVsComments").append(
			"<br><b>Mean no. of Comments</b> : "
					+ findMean(closedIssuesCommentsArray));
	$("#closedIssuesVsComments").append(
			"<br><b>Median no. of Comments</b> : "
					+ findMedian(closedIssuesCommentsArray));
}

function populateClosedIssuesCommentsArray(userProfile) {
	var closedIssuesCommentsArray = new Array();
	var closedIssuesCounter = 1;
	var otherRepos = userProfile.otherRepositories;
	var ownedRepos = userProfile.ownedRepositories;
	var starredRepos = userProfile.starredRepositories;

	for (var i = 0; i < otherRepos.length; i++) {
		var repoClosedIssues = otherRepos[i].repoClosedIssues;
		for (var j = 0; j < repoClosedIssues.length; j++) {
			var noOfComments = repoClosedIssues[j].issue.noOfComments;
			if (noOfComments == 0)
				continue;

			var obj = {};
			obj["index"] = closedIssuesCounter;
			obj["data"] = noOfComments;
			closedIssuesCommentsArray.push(obj);
			closedIssuesCounter++;
		}
	}

	for (var i = 0; i < ownedRepos.length; i++) {
		var repoClosedIssues = ownedRepos[i].repoClosedIssues;
		for (var j = 0; j < repoClosedIssues.length; j++) {
			var noOfComments = repoClosedIssues[j].issue.noOfComments;
			if (noOfComments == 0)
				continue;

			var obj = {};
			obj["index"] = closedIssuesCounter;
			obj["data"] = noOfComments;
			closedIssuesCommentsArray.push(obj);
			closedIssuesCounter++;
		}
	}

	for (var i = 0; i < starredRepos.length; i++) {
		var repoClosedIssues = starredRepos[i].repoClosedIssues;
		for (var j = 0; j < repoClosedIssues.length; j++) {
			var noOfComments = repoClosedIssues[j].issue.noOfComments;
			if (noOfComments == 0)
				continue;

			var obj = {};
			obj["index"] = closedIssuesCounter;
			obj["data"] = noOfComments;
			closedIssuesCommentsArray.push(obj);
			closedIssuesCounter++;
		}
	}

	return closedIssuesCommentsArray;
}