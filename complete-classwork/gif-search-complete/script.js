const giphy_endpoint = 'http://api.giphy.com/v1' // query key is 'q'
const giphy_api_key = '137dce427cf745ddb322ad8d78229229' // query key is 'api_key'

const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-form input')
const results = document.querySelector('.results')

function getGifs(term, path, callback) {
    const type = (stickers.checked === true) ? 'stickers' : 'gifs'

    axios(`${giphy_endpoint}/${type}/${path}?api_key=${giphy_api_key}&q=${term}`)
    .then(function(res) {
        console.log(res)

        callback(res, type === 'stickers')
    })
}

function displayManyGifs(response, areStickers) {
    for(let i = 0; i < response.data.data.length; i++) {
        const gif_url = response.data.data[i].images.preview_gif.url
        results.innerHTML += `
            <a target="_blank" rel="noopener" href="${response.data.data[i].url}">
                <img class="image ${(areStickers) ? 'sticker' : ''}" src="${gif_url}">
            </a>
        `
    }
}

searchForm.addEventListener('submit', function(event) {
    event.preventDefault()

    if(searchInput.value === '') return

    results.innerHTML = ''

    getGifs(searchInput.value, 'search', displayManyGifs)
})

random.addEventListener('click', function() {
    getGifs('', 'random', function(response) {
        results.innerHTML = `
            <a target="_blank" rel="noopener" href="${response.data.data.url}">
                <img class="image" src="${response.data.data.image_url}">
            </a>
        `
    })
})

trending.addEventListener('click', function() {
    results.innerHTML = ''

    getGifs('', 'trending', displayManyGifs)
})

// Documention for Azure Search Suggestion API:
// https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-autosuggest-api-v7-reference
// function predict(term) {
//     dropdown.style.display = 'block'
//     axios({
//         url: 'https://api.cognitive.microsoft.com/bing/v7.0/Suggestions',
//         params: {
//             q: term
//         },
//         headers: {
//             'Ocp-Apim-Subscription-Key': '3235ad791925462385dc69bbea9b7b7d'
//         }
//     })
//     .then(function(res) {
//         console.log(res);
//         dropdown.innerHTML = buildDropdown(res.data.suggestionGroups[0].searchSuggestions)
//     })
// }
//
// searchForm.addEventListener('input', function(e) {
//     predict(searchInput.value)
// })
//
// dropdown.addEventListener('click', function(e) {
//     if(e.target.classList.contains('suggestion')) {
//         searchInput.value = e.target.textContent
//         search(e.target.textContent)
//         dropdown.style.display = 'none'
//     }
// })
