function onPageLoad(){

  var i, li, li2, br, webUrl, webTitle, storyImg
  var headlinesList = document.getElementById("headlinesList");

  fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=happy")
    .then(response => response.json())
    .then(data => headlinesCallback(data))

  function headlinesCallback(inputHeadlines) {

    for (i = 0; i < 2; i++) {
      webUrl = inputHeadlines.response.results[i].webUrl
      webTitle = inputHeadlines.response.results[i].webTitle
      apiUrl = "http" + inputHeadlines.response.results[i].apiUrl.substr(5)
      li = document.createElement("a");
      
      br = document.createElement("br");
      br2 = document.createElement("br");
      li.setAttribute('id', i);
      li.setAttribute('href', webUrl);
      li.appendChild(document.createTextNode(webTitle));
      headlinesList.appendChild(li);

      fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + apiUrl + "?show-fields=all")
        .then(response => response.json())
        .then(data => storyCallback(data))
    
        headlinesList.appendChild(br);
        headlinesList.appendChild(br2);

    }
  };

  function storyCallback(inputStory) {

  
    storyImg = inputStory.response.content.fields.thumbnail

    console.log(storyImg)
    img = document.createElement("IMG");

    img.setAttribute('id', "img" + i);
    img.setAttribute('class', "gu-image");
    img.src = storyImg;
    headlinesList.appendChild(img);


  }

}

 
// console.log(data.response.content.fields.main)


// fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url)
// .then(response => response.json())
// .then(data => console.log(data.text));