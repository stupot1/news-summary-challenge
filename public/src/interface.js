// fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html")
//   .then(response => response.json())
//   .then(data => console.log(data.text));

fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=happy")
  .then(response => response.json())
  .then(data => cb(data))

function cb(data) {

  var i;
  var li;
  var br
  var headlinesList = document.getElementById("headlinesList");

  for (i = 0; i < 10; i++) {
    li = document.createElement("a");
    br = document.createElement("br");
    li.setAttribute('id', i);
    li.setAttribute('href',data.response.results[i].webUrl);
    li.appendChild(document.createTextNode(data.response.results[i].webTitle));
    headlinesList.appendChild(li);
    headlinesList.appendChild(br);
  }
};

