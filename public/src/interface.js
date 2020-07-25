function onPageLoad() {

    var i, li, li2, br, webUrl, webTitle, storyImg
    var headlinesList = document.getElementById("headlinesList");
    var x = 0;

    fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=happy")
        .then(response => response.json())
        .then(data => headlinesCallback(data))

    function headlinesCallback(inputHeadlines) {

        for (i = 1; i < 3; i++) {
            webUrl = inputHeadlines.response.results[i].webUrl
            webTitle = inputHeadlines.response.results[i].webTitle
            apiUrl = "http" + inputHeadlines.response.results[i].apiUrl.substr(5)
            li = document.createElement("a");

            br = document.createElement("br");
            br2 = document.createElement("br");
            li.setAttribute('id', i);
            li.setAttribute('href', webUrl);
            console.log((250 + (i * 250))) + "px";
            li.style.top = (250 + (i * 250)) + "px";
            console.log(li.style.top)
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
        img = document.createElement("IMG");
        img.setAttribute('id', "img" + x);
        img.setAttribute('class', "gu-image");
        img.style.top = (-x * 100);
        img.src = storyImg;
        headlinesList.appendChild(img);
        x++
    }

}


// console.log(data.response.content.fields.main)


// fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url)
// .then(response => response.json())
// .then(data => console.log(data.text));