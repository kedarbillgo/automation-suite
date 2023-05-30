console.log("Silence is golden.");

var singers = [123, 456, 789, 101, 112];
var counted = [];
var favirouteCount = 0;

if (singers.length > 1) {
  singers.forEach((singer) => {
    let c = singers.filter(
      (s) => s === singer && !counted.includes(singer)
    ).length;
    counted.push(singer);
    favirouteCount = c > 1 ? favirouteCount + 1 : favirouteCount;
  });
  favirouteCount = favirouteCount || 1;
} else {
  favirouteCount = singers.length;
}

console.log(favirouteCount);

/*
var allcookies  =  document.cookie;  
// Get all the cookies pairs in an array  
var cookiearray = allcookies.split(';');

var readCookie = (key) => document.cookie.split(';').filter((text) => text.includes(key))?.[0]?.split("=")?.[1];

(function () {
  document.getElementById('okta-oauth-nonce').value = readCookie('okta-oauth-nonce');
  document.getElementById('okta-oauth-state').value = readCookie('okta-oauth-state');
  document.getElementById('okta-token-storage').value = localStorage.getItem('okta-token-storage');
  document.getElementById('okta-cache-storage').value = localStorage.getItem('okta-cache-storage');
})();

*/
