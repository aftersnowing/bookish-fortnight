let apiKeys = null;

function generateHMAC(sharedKey) {
  const timeStamp = Math.floor(new Date().getTime() / 1000).toString();
  const encordedTimeStamp_base64 = btoa(timeStamp);
  const hashCode = CryptoJS.HmacSHA256(encordedTimeStamp_base64, sharedKey);
  const encordedHashCode_base64 = CryptoJS.enc.Base64.stringify(hashCode);
  document.getElementById(
    "hashCode"
  ).innerHTML = `hash code: ${encordedHashCode_base64}`;
  document.getElementById("timeStamp").innerHTML = `time stamp: ${timeStamp}`;
  apiKeys = { encordedHashCode_base64, timeStamp };
}

function httpGet(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, true);
  xmlHttp.setRequestHeader("Authentication", apiKeys.encordedHashCode_base64);
  xmlHttp.setRequestHeader("Time-Stamp", apiKeys.timeStamp);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

generateHMAC("POSSM");
httpGet("http://127.0.0.1:57412/HMACTEST");

document
  .getElementById("Renew")
  .addEventListener("click", () => generateHMAC("POSSM"));
document
  .getElementById("Request")
  .addEventListener("click", () => httpGet("http://127.0.0.1:57412/HMACTEST"));
