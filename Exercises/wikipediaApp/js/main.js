$(document).ready(function() {

    $(".search-container").fadeIn(1000);

    $("#search").on("keydown", function(event) {
        if (event.keyCode === 13) {
            $("#articles").fadeOut(200, function() {
                getArticles($("#search").val());
                $("#search").val("");
            });
        }
    })

    function createArticle(title, snippet) {
        var article = (
            '<div class="article">' +
                '<a href="https://en.wikipedia.org/wiki/' + title + '"target="_blank">' +
                    '<h3>' + title + '</h3>' +
                    '<p>"...' + snippet + '..."</p>' +
                '</a>' +
            '</div>'
        );

        return article;
    }

    function getArticles(string) {

        $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + string,
            dataType: "jsonp",
            success: function(response) {
                console.log(response);
                $("#articles").html("");
                var articlesList = '';
                response.query.search.forEach(function(obj) {
                    articlesList += createArticle(obj.title, obj.snippet);
                });
                $('#articles').append(articlesList);
                $("#articles").fadeIn(300);
            }
        });

    }

});
