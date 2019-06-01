var mainPage = document.querySelectorAll(
  "#contents #content .style-scope ytd-thumbnail span" //재생목록 메인페이지용
);
var summaryPage = document.querySelectorAll(
  "#items-stamp #thumbnail-container #thumbnail #overlays span" //재생목록 요약페이지용
);

var query = mainPage;
if (mainPage.length === 0) query = summaryPage;

var duration = 0;
var t = null;
var hr = 0;
var min = 0;
var sec = 0;
for (let i = 0; i < query.length; i++) {
  t = query[i].innerText;
  t = t.split(":");
  min = t[0];
  sec = t[1];
  duration += parseInt(min) * 60 + parseInt(sec);
}
(hr = Math.floor(duration / 3600)), (duration = duration % 3600);
(min = Math.floor(duration / 60)), (duration = duration % 60);
sec = duration;
console.log(`총 재생시간은 ${hr}시간 ${min}분 ${sec}초 입니다.`);
