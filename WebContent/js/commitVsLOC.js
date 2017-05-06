function displayCommitVsLocPlot(userProfile) {
	$("#commitVsLOC").html('');
	var commitLocArray = populateCommitLOCArray(userProfile);
	if (commitLocArray.length == 0) {
		$("#commitVsLOC").append("<h1>No Data Found</h1>");
		return;
	}
	drawScatterPlot(commitLocArray, "#commitVsLOC");
	$("#commitVsLOC").append(
			"<br><b>No. of Comits</b> : " + commitLocArray.length);
	$("#commitVsLOC").append(
			"<br><b>Mean Commit Changes</b> : " + findMean(commitLocArray));
	$("#commitVsLOC").append(
			"<br><b>Median Commit Changes</b> : " + findMedian(commitLocArray));
}

function populateCommitLOCArray(userProfile) {
	var commitLocArray = new Array();
	var commitCounter = 1;
	var otherRepos = userProfile.otherRepositories;
	var ownedRepos = userProfile.ownedRepositories;
	var starredRepos = userProfile.starredRepositories;

	for (var i = 0; i < otherRepos.length; i++) {
		var repoCommits = otherRepos[i].repoCommits;
		for (var j = 0; j < repoCommits.length; j++) {
			var locChanged = repoCommits[j].commit.linesChanged;
			if (locChanged == 0)
				continue;

			var obj = {};
			obj["index"] = commitCounter;
			obj["data"] = locChanged;
			commitLocArray.push(obj);
			commitCounter++;
		}
	}

	for (var i = 0; i < ownedRepos.length; i++) {
		var repoCommits = ownedRepos[i].repoCommits;
		for (var j = 0; j < repoCommits.length; j++) {
			var locChanged = repoCommits[j].commit.linesChanged;
			if (locChanged == 0)
				continue;

			var obj = {};
			obj["index"] = commitCounter;
			obj["data"] = locChanged;
			commitLocArray.push(obj);
			commitCounter++;
		}
	}

	for (var i = 0; i < starredRepos.length; i++) {
		var repoCommits = starredRepos[i].repoCommits;
		for (var j = 0; j < repoCommits.length; j++) {
			var locChanged = repoCommits[j].commit.linesChanged;
			if (locChanged == 0)
				continue;

			var obj = {};
			obj["index"] = commitCounter;
			obj["data"] = locChanged;
			commitLocArray.push(obj);
			commitCounter++;
		}
	}
	return commitLocArray;
}

//function findMean(commitLocArray) {
//	var sum = 0
//	for (var i = 0; i < commitLocArray.length; i++) {
//		sum += commitLocArray[i].data;
//	}
//	return (sum / commitLocArray.length);
//}
//
//function findMedian(commitLocArray) {
//	commitLocArray.sort(function(a, b) {
//		return a.data - b.data;
//	});
//	console.log(commitLocArray);
//	return commitLocArray[commitLocArray.length / 2].data;
//
//}