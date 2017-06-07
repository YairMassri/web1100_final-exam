const api_url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='
const wiki_link = 'https://en.wikipedia.org/wiki'

const btn = document.querySelector('#searchButton')
const input = document.querySelector('#searchBox')
const articlesContainer = document.querySelector('#articlesContainer')

function getArticles(term) {
    $.ajax({
        url: api_url + term,
        dataType: "jsonp",
        success: function(response) {
            console.log(response);

            let articlesString = ''
            response.query.search.forEach(function(article) {
                articlesString += `<a class="article" href="${wiki_link}/${article.title}">`
                articlesString += `<h3>${article.title}</h3>`
                articlesString += `<p>${article.snippet}</p>`
                articlesString += `</a>`
            })

            articlesContainer.innerHTML = articlesString
        }
    })
}

btn.addEventListener('click', function() {
     getArticles(input.value)
})

input.addEventListener('keypress', function(event) {
    if(event.keyCode === 13) {
        getArticles(input.value)
    }
})
