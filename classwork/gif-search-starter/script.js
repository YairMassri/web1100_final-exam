const giphy_endpoint = 'http://api.giphy.com/v1/gifs/search' // query key is 'q'
const giphy_api_key = 'dc6zaTOxFJmzC' // query key is 'api_key'

const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-form input')
const dropdown = document.querySelector('.dropdown')
const results = document.querySelector('.results')

// Documention for Azure Search Suggestion API:
// https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-autosuggest-api-v7-reference
