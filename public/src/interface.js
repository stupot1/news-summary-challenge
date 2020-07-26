function onPageLoad() {

  var i, li, br, j
  var webUrl = []
  var webTitle = []
  var storyImg = []
  var apiUrl = []
  var headlinesList = document.getElementById("headlinesList");
  var x = 0
  const numberOfStories = 10

    fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=")
        .then(response => response.json())
        .then(data => headlinesCallback(data))

    function headlinesCallback(inputHeadlines) {

        for (i = 0; i < numberOfStories; i++) {
            webUrl[i] = inputHeadlines.response.results[i].webUrl
            webTitle[i] = inputHeadlines.response.results[i].webTitle
            apiUrl[i] = "http" + inputHeadlines.response.results[i].apiUrl.substr(5)

            fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" +  apiUrl[i] + "?show-fields=all")
                .then(response => response.json())
                .then(data => storyCallback(data))
        }
    };

    function storyCallback(inputStory) {
      
        storyImg[x] = inputStory.response.content.fields.thumbnail
        x++

        if (x==numberOfStories){

            for (j = 0; j < numberOfStories; j++) {

                img = document.createElement("IMG");
                li = document.createElement("a");
                br = document.createElement("br");
                br2 = document.createElement("br");

                img.setAttribute('id', "img" +j);
                img.setAttribute('class', "gu-image");
                img.src = storyImg[j];
                
                li.setAttribute('id', j);
                li.setAttribute('href', webUrl[j]);
                li.appendChild(document.createTextNode(webTitle[j]));

                headlinesList.appendChild(img);
                headlinesList.appendChild(li);
                headlinesList.appendChild(br);
                headlinesList.appendChild(br2);
            }
        }
    }
}

// fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url)
// .then(response => response.json())
// .then(data => console.log(data.text));