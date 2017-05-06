function displayUserData(userProfile) {
	// $("#userData").html("");
	fillUserObjectData(userProfile);
	fillUserOwnedRepositoryData(userProfile);
	fillUserStarredRepositoryData(userProfile);
	fillUserOtherRepositoryData(userProfile);
	fillUserSkills(userProfile);
}

function fillUserObjectData(userProfile) {
	$("#userObjectName").html("<b>Username</b> : " + userProfile.user.name);
	$("#userObjectUrl").html(
			"<b>URL</b> : <a href= 'https://github.com/"
					+ userProfile.user.name + "'>https://github.com/"
					+ userProfile.user.name + "</a>");
	$("#userObjectNoOfFollowers").html(
			"<b>No. of Followers</b> : " + userProfile.user.numberOfFollowers);
}

function fillUserOwnedRepositoryData(userProfile) {
	$("#userNoOfOwnedRepos").html(
			"<b>No of Repositories</b> : "
					+ userProfile.ownedRepositories.length);

	var commitsArray = getCommits(userProfile.ownedRepositories);

	$("#userOwnedRepoNoOfCommits").html(
			"<b>No of Commits</b> : " + commitsArray.length);
	$("#userOwnedRepoMeanCommitChange").html(
			"<b>Avg LOC changes</b> : " + findMeanCommitChange(commitsArray));
	$("#userOwnedRepoMedianCommitChange").html(
			"<b>Median LOC changes</b> : "
					+ findMedianCommitChange(commitsArray));

	var openedIssues = getOpenedIssues(userProfile.ownedRepositories);
	var closedIssues = getClosedIssues(userProfile.ownedRepositories);
	var reOpenedIssues = getReOpenedIssues(userProfile.ownedRepositories);
	$("#userOwnedRepoIssuesOpened").html(
			"<b>No of Opened Issues</b> : " + openedIssues.length);
	$("#userOwnedRepoIssuesClosed").html(
			"<b>No of Closed Issues</b> : " + closedIssues.length);
	$("#userOwnedRepoIssuesReopened").html(
			"<b>No of Re-opened Issues</b> : " + reOpenedIssues.length);

	var issueComments = getIssueComments(userProfile.ownedRepositories);
	$("#userOwnedRepoNoOfComments").html(
			"<b>No of Comments</b> : " + issueComments.length);
	$("#userOwnedRepoMeanCommentLength").html(
			"<b>Avg Comment Length</b> : "
					+ getMeanCommentLength(issueComments));

}

function fillUserStarredRepositoryData(userProfile) {
	$("#userNoOfStarredRepos").html(
			"<b>No of Repositories</b> : "
					+ userProfile.starredRepositories.length);

	var commitsArray = getCommits(userProfile.starredRepositories);

	$("#userStarredRepoNoOfCommits").html(
			"<b>No of Commits</b> : " + commitsArray.length);
	$("#userStarredRepoMeanCommitChange").html(
			"<b>Avg LOC changes</b> : " + findMeanCommitChange(commitsArray));
	$("#userStarredRepoMedianCommitChange").html(
			"<b>Median LOC changes</b> : "
					+ findMedianCommitChange(commitsArray));

	var openedIssues = getOpenedIssues(userProfile.starredRepositories);
	var closedIssues = getClosedIssues(userProfile.starredRepositories);
	var reOpenedIssues = getReOpenedIssues(userProfile.starredRepositories);
	$("#userStarredRepoIssuesOpened").html(
			"<b>No of Opened Issues</b> : " + openedIssues.length);
	$("#userStarredRepoIssuesClosed").html(
			"<b>No of Closed Issues</b> : " + closedIssues.length);
	$("#userStarredRepoIssuesReopened").html(
			"<b>No of Re-opened Issues</b> : " + reOpenedIssues.length);

	var issueComments = getIssueComments(userProfile.starredRepositories);
	$("#userStarredRepoNoOfComments").html(
			"<b>No of Comments</b> : " + issueComments.length);
	$("#userStarredRepoMeanCommentLength").html(
			"<b>Avg Comment Length</b> : "
					+ getMeanCommentLength(issueComments));

}

function fillUserOtherRepositoryData(userProfile) {
	$("#userNoOfOtherRepos").html(
			"<b>No of Repositories</b> : "
					+ userProfile.otherRepositories.length);

	var commitsArray = getCommits(userProfile.otherRepositories);

	$("#userOtherRepoNoOfCommits").html(
			"<b>No of Commits</b> : " + commitsArray.length);
	$("#userOtherRepoMeanCommitChange").html(
			"<b>Avg LOC changes</b> : " + findMeanCommitChange(commitsArray));
	$("#userOtherRepoMedianCommitChange").html(
			"<b>Median LOC changes</b> : "
					+ findMedianCommitChange(commitsArray));

	var openedIssues = getOpenedIssues(userProfile.otherRepositories);
	var closedIssues = getClosedIssues(userProfile.otherRepositories);
	var reOpenedIssues = getReOpenedIssues(userProfile.otherRepositories);
	$("#userOtherRepoIssuesOpened").html(
			"<b>No of Opened Issues</b> : " + openedIssues.length);
	$("#userOtherRepoIssuesClosed").html(
			"<b>No of Closed Issues</b> : " + closedIssues.length);
	$("#userOtherRepoIssuesReopened").html(
			"<b>No of Re-opened Issues</b> : " + reOpenedIssues.length);

	var issueComments = getIssueComments(userProfile.otherRepositories);
	$("#userOtherRepoNoOfComments").html(
			"<b>No of Comments</b> : " + issueComments.length);
	$("#userOtherRepoMeanCommentLength").html(
			"<b>Avg Comment Length</b> : "
					+ getMeanCommentLength(issueComments));
}

function fillUserSkills(userProfile) {
	var skillsArray = fetchUniqueSkillsArray(userProfile);
	var counter = 0;

	var skillString = "";

	for (var i = 0; i < skillsArray.length; i++) {
		if ((i + 1) % 4 == 1) {
			skillString += "<tr>";
		}

		skillString += "<td class='userSkillName'><b>" + skillsArray[i]
				+ "</b></td>";

		if ((i + 1) % 4 == 0) {
			skillString += "</tr>";
		}

	}

	$("#userSkillTable").html(skillString);
}

function fetchUniqueSkillsArray(userProfile) {
	var skillsArray = new Array();

	var ownedRepos = userProfile.ownedRepositories;
	var starredRepos = userProfile.ownedRepositories;
	var otherRepos = userProfile.otherRepositories;

	for (var i = 0; i < ownedRepos.length; i++) {
		var repoLanguages = ownedRepos[i].repoLanguages;
		if (typeof repoLanguages === 'undefined')
			continue;

		for (var j = 0; j < repoLanguages.length; j++) {
			if (!checkIfArrayContains(skillsArray, repoLanguages[j].name
					.toLowerCase())) {
				skillsArray.push(repoLanguages[j].name.toLowerCase());
			}
		}
	}

	for (var i = 0; i < starredRepos.length; i++) {
		var repoLanguages = starredRepos[i].repoLanguages;
		if (typeof repoLanguages === 'undefined')
			continue;

		for (var j = 0; j < repoLanguages.length; j++) {
			if (!checkIfArrayContains(skillsArray, repoLanguages[j].name
					.toLowerCase())) {
				skillsArray.push(repoLanguages[j].name.toLowerCase());
			}
		}
	}

	for (var i = 0; i < otherRepos.length; i++) {
		var repoLanguages = otherRepos[i].repoLanguages;
		if (typeof repoLanguages === 'undefined')
			continue;

		for (var j = 0; j < repoLanguages.length; j++) {
			if (!checkIfArrayContains(skillsArray, repoLanguages[j].name
					.toLowerCase())) {
				skillsArray.push(repoLanguages[j].name.toLowerCase());
			}
		}
	}

	return skillsArray;
}

function checkIfArrayContains(array, val) {

	for (var i = 0; i < array.length; i++) {
		if (array[i] == val)
			return true;
	}
	return false;
}

function getCommits(repos) {
	var commitsArray = new Array();
	for (var i = 0; i < repos.length; i++) {
		var commits = repos[i].repoCommits;
		for (var j = 0; j < commits.length; j++) {
			commitsArray.push(commits[j]);
		}
	}
	return commitsArray;
}

function getOpenedIssues(repos) {
	var openedIssuesArray = new Array();
	for (var i = 0; i < repos.length; i++) {
		var openedIssues = repos[i].repoOpenedIssues;
		for (var j = 0; j < openedIssues.length; j++) {
			openedIssuesArray.push(openedIssues[j]);
		}
	}
	return openedIssuesArray;
}

function getClosedIssues(repos) {
	var closedIssuesArray = new Array();
	for (var i = 0; i < repos.length; i++) {
		var closedIssues = repos[i].repoClosedIssues;
		for (var j = 0; j < closedIssues.length; j++) {
			closedIssuesArray.push(closedIssues[j]);
		}
	}
	return closedIssuesArray;
}

function getReOpenedIssues(repos) {
	var reOpenedIssuesArray = new Array();
	for (var i = 0; i < repos.length; i++) {
		var reOpenedIssues = repos[i].repoReOpenedIssues;
		for (var j = 0; j < reOpenedIssues.length; j++) {
			reOpenedIssuesArray.push(reOpenedIssues[j]);
		}
	}
	return reOpenedIssuesArray;
}

function getIssueComments(repos) {
	var issueCommentsArray = new Array();
	for (var i = 0; i < repos.length; i++) {
		var issueComments = repos[i].repoComments;
		for (var j = 0; j < issueComments.length; j++) {
			issueCommentsArray.push(issueComments[j]);
		}
	}
	return issueCommentsArray;
}

function getMeanCommentLength(issueComments) {
	var sum = 0;

	if (issueComments.length == 0)
		return 0;

	for (var i = 0; i < issueComments.length; i++) {
		var commentLength = issueComments[i].comment.body.split(" ").length;
		sum += commentLength;
	}

	return Math.floor(sum / issueComments.length);
}

function findMeanCommitChange(commits) {
	var sum = 0;

	if (commits.length == 0)
		return 0;

	for (var i = 0; i < commits.length; i++) {
		sum += commits[i].commit.linesChanged;
	}
	return Math.floor(sum / commits.length);
}

function findMedianCommitChange(commits) {
	if (commits.length == 0)
		return 0;

	commits.sort(function(a, b) {
		return a.commit.linesChanged - b.commit.linesChanged;
	})

	return commits[Math.floor(commits.length / 2)].commit.linesChanged;
}
