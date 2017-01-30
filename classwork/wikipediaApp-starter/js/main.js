$(document).ready(function() {

    function getArticles(searchTerm) {
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + searchTerm,
            dataType: "jsonp",
            method: 'get'
        }).done(function(response) {
            console.log(response);
            // use the articleMaker function here and then
            // append each article to the DOM using jquery's .append() method
        });
    }

    function articleMaker(title, snippet) {
        var article = '';
        article += '<div class="article">';
        article +=      '<h3>' + title + '</h3>';
        article +=      '<p>' + snippet + '</p>';
        article += '</div>';

        // IMPORTANT: make sure each article can be clicked on and takes you to the
        // wikipedia page of that article. Hint: use an anchor element.
        
        return article;
    }

    // When click on "search" button, run the getArticles function and pass in
    // the value of the search box as the "searchTerm" parameter to the getArticles function
    $('#searchButton').click(function() {
        
    });


    // Extra Credit: do the same thing as clicking on the "search" button, but when the user hits the "enter" key
    $("#searchBox").on("keypress", function(event) {
        
    });

});
