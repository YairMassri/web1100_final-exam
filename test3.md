##Test 3

Build the Weather App from scratch. It should get the local weather information
using the user's ip address and display the temperature, the weather, and the
humidity.

First, create a directory called "WeatherAppTest." Then, create an index.html file,
an app.js file, and a style.css file inside of WeatherAppTest.

In your index.html file, include your style.css and app.js files, with the
correct tags and positions in the document.

Next, in index.html, create a div element that will hold the weather information.
Create elements within this div for city, country, temperature, weather, and
humidity.

In app.js, use the jQuery $.ajax method to get the local information such as city,
country, and zip/postal code. The url for the ip information is http://ipinfo.io/json.

The $.ajax method looks like this:
```JavaScript
    $.ajax({
        url: "",
        success: function(response) {
            console.log(response); // prints to the console the data returned from the API
        }
    });
```

Then, use a second $.ajax call to get the weather information from the Open
Weather Map API: http://openweathermap.org/current#zip. Read the instructions
on this webpage for how to get the weather information using zip/postal code.

Use the zip/postal from the ipinfo API in the Open Weather Map API.

Use jQuery to select your elements in index.html by tag name, ID, or class, and
set their values to the values returned from your API responses. Use .val() or
.html() to set these values.

In style.css, do the following:

    1. Center all your content
    2. Add a dark background color or image
    3. Change the font color to a light color
