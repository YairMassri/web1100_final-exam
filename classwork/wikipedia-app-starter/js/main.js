

// elemnts
const wiki_link = 'https://en.wikipedia.org/wiki'
const randomEndpoint = '/Special:Random'
const text = document.querySelector(".searchTerm");
const search = document.querySelector(".search");
const random = document.querySelector(".random");
const output = document.querySelector(".output");


// function
function ajaxSearch(){
const api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${text.value}&format=json&callback=?`

$.ajax({
    url: api_url,
    dataType: 'json',
    success: (data)=>{
        console.log(data)
        for(var i = 0; i<data[1].length; i++){
            output.innerHTML += `
            <li class="li">
            <a href="${data[3][i]}">${data[1][i]}</a>
            <p>${data[2][i]}</p>
            </li>`
        }
    },
    error: (error)=>{
        console.log("There was an error")
    }
})
}

// call

search.addEventListener('click', function(){
    ajaxSearch()
})
random.addEventListener('click', function(){
    window.open(`${wiki_link}${randomEndpoint}`)
})

document.addEventListener(`keydown`, function (event) {
    // console.log(event)
    if (event.key === "Enter") {
        ajaxSearch()
    }

})