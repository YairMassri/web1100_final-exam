const giphy_endpoint = 'http://api.giphy.com/v1/gifs/search'
const giphy_api_key = 'dc6zaTOxFJmzC'

const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-form input')
const dropdown = document.querySelector('.dropdown')
const results = document.querySelector('.results')

function buildImages(data) {
    let images = ``

    data.forEach(res => {
        images += `
            <img src="${res.images.preview_gif.url}" />
        `
    })

    return images
}

function search(term) {
    axios({
        url: giphy_endpoint,
        params: {
            q: encodeURI(term),
            api_key: giphy_api_key
        }
    })
    .then(function(res) {
        console.log(res);

        results.innerHTML = buildImages(res.data.data)
    })
}

function buildDropdown(data) {
    let terms = ''

    data.forEach(res => {
        terms += `
            <span class="suggestion">${res.query}</span>
        `
    })

    return terms
}

// Documention for Azure Search Suggestion API:
// https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-autosuggest-api-v7-reference
function predict(term) {
    dropdown.style.display = 'block'
    axios({
        url: 'https://api.cognitive.microsoft.com/bing/v7.0/Suggestions',
        params: {
            q: term
        },
        headers: {
            'Ocp-Apim-Subscription-Key': '3235ad791925462385dc69bbea9b7b7d'
        }
    })
    .then(function(res) {
        console.log(res);
        dropdown.innerHTML = buildDropdown(res.data.suggestionGroups[0].searchSuggestions)
    })
}

searchForm.addEventListener('submit', function(e) {
    e.preventDefault()

    search(searchInput.value)
})

searchForm.addEventListener('input', function(e) {
    predict(searchInput.value)
})

dropdown.addEventListener('click', function(e) {
    if(e.target.classList.contains('suggestion')) {
        searchInput.value = e.target.textContent
        search(e.target.textContent)
        dropdown.style.display = 'none'
    }
})
