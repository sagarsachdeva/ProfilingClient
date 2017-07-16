var matchedResult;
function findMatches() {
	var jobDesc = $("#jobDescTestArea").val();
	var jd = jobDesc.split("\n");
	$.ajax({
		type : "POST",
		url : "http://localhost:8080/ProfileBuilder/match/findMatches",
		data : JSON.stringify(jd),
		contentType : "application/json",
		dataType : "json",
		success : function(data) {
			matchedResult = data;
			jdMacthesPageLoad(data);
			console.log(data);
		},
	});
}

function populateMatches(data) {
	$("#jdMatches").html("");
	var jdMatches = "<table style='width: 80%'>";
	for (var i = 0; i < data.length; i++) {
		jdMatches += "<tr>";
		jdMatches += "<td style='width: 25%'><div id='"
				+ data[i].user.id
				+ "' onclick='showMatchedUserProfile(this)'><img class='jdMatchProfile' src='images/profile.png' /></div></td>"
		jdMatches += "<td><div class='matchObjDataDetails'><div class='matchObjectName'>Name : "
				+ data[i].user.name
				+ "</div><br><div class='matchObjectUrl'>URL : "
				+ data[i].user.url
				+ "</div><br><div class='matchObjectNoOfFollowers'>Number of Followers : "
				+ data[i].user.numberOfFollowers + "</div></div><br><hr></td>";
		jdMatches += "</tr>";
	}
	jdMatches += "</table>";
	$("#jdMatches").html(jdMatches);

}

function showMatchedUserProfile(dom) {
	// alert(dom.id);
	$('#pageContent').load("userProfile.html");
	getProfileAndPopulate(dom.id);
}