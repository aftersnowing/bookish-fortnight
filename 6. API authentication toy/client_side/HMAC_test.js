function GenerateHMAC(sharedKey) {
	// const timeStamp = Math.floor(new Date().getTime() / 1000).toString();
	const timeStamp = "1234567890";
	const encordedTimeStamp_base64 = btoa(timeStamp);
	const hashCode = CryptoJS.HmacSHA256(encordedTimeStamp_base64, sharedKey);
	const encordedHashCode_base64 = CryptoJS.enc.Base64.stringify(hashCode);
	document.getElementById('hashCode').innerHTML = `hash code: ${encordedHashCode_base64}`;
	document.getElementById('timeStamp').innerHTML = `time stamp: ${encordedTimeStamp_base64}`;
	return {encordedHashCode_base64, timeStamp}
}
const apiKeys = GenerateHMAC('POSSM');

function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", url, true);
	// xmlHttp.setRequestHeader('Authentication', apiKeys.encordedHashCode_base64);
	// xmlHttp.setRequestHeader('Time-Stamp', apiKeys.timeStamp);
	xmlHttp.send(null);
    return xmlHttp.responseText;
}
httpGet('http://127.0.0.1:57412/HMACTEST');
