const viewdog = document.querySelector("#viewDog");
const dog_api = 'https://dog.ceo/api/breeds/list/all'

$.ajax({
    url: dog_api,
    success: function (data) {
        var arr = data.message;
        for (var k in arr) {
            var option = "<option value='" + k + "'>" + k + "</option>";
            $("#selectBreed").append(option);
        }
    },
    error: function (msg) {
        console.log(msg);
    }
});

viewdog.addEventListener("click", e => {
    var breedName = document.getElementById("selectBreed").value;
    var link = "https://dog.ceo/api/breed/" + breedName + "/images/random";
    $.ajax({
        url: link,
        success: function (data) {
            document.getElementById("breedImage").setAttribute("src", data.message);
        },
        error: function (msg) {
            console.log(msg);
        }
    });
});
