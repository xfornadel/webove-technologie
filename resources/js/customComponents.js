function getBannerText() {

    let text = "Operating since 1968, Devon Tours offers an array of travel tours. Whether you love hiking in exotic locations or want to get the most out of your retirement, Devon Tours has a package for you.";

    document.getElementById("bannerText").innerHTML = text;
}

function getFooter() {
    const d = new Date();
    let year = d.getFullYear();

    let footer = "<span>Devon Tours</span>"
        + "<span> © " + year + " </span>"
        + "<span>SW version: 1.0.99</span>";

    document.getElementById("myFooter").innerHTML = footer;
}

function getProfiles() {

	let text = "";
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function () {
		text = this.responseText;
	}
	xhttp.open("GET", "../resources/data/profiles.json", false);
	xhttp.send();

    const profiles = JSON.parse(text);
    profiles.forEach(setProfile);
}

function setProfile(item) {

	let profile = "<h4 class=\"w3-text-teal\"><img src=\"../resources/images/" + item.img + "\" " + "alt=\"" + item.country + "\" width=\"250\" height=\"165\" align=\"right\">" + item.country + "</h4>"
		+ "<p><b>Region</b>:" + item.region + "</p>"
		+ "<p><b>Description</b>:<br>" + item.description + "</p>"
		+ "<p><b>Image Caption</b>:" + item.imageCaption + "</p>"
		+ "<p><b>Population</b>:" + item.population + "</p>"
		+ "<p><b>Local Currency</b>:" + item.localCurrency + "</p>";

	document.getElementById(item.id).innerHTML = profile;
}