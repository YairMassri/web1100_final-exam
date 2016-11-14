##Test 4

Build the Wikipedia App without looking at the previous Wikipedia app you built.
However, you are allowed to look at your weather app.

Start by creating a new directory called "WikipediaAppTest." Inside of this
directory, create an index.html file, a directory called "js", and a directory
called "style." Inside of style, create a file called main.css. Inside of js,
create a file called app.js.

In index.html, include main.css and app.js with the appropriate element tags.

Then, place jQuery inside the body of index.html.

Above jQuery, create an input tag with type="text" and id="search".
Below your input tag, create a button element with id="submit".
Below the button, create a div with id="articles".

In app.js, create a jQuery ajax call to the following Wikipedia API url:
```JavaScript
    https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=
```
After the equals sign at the end of this url, you will put the string that
the user types into the input box, but you haven't written the code to capture
that string yet. Let's do that now.

After the $.ajax call, create a click event handler for the button (remember,
it's id is "submit").

Inside of the click handler for the button, cut the $.ajax call and put it inside
of the click handler. This will run the $.ajax call when the user clicks on the
button. However, your API call still won't work, because there is no string at
the end of your url, after the "search=" property. We will add that now.

At the end of your url, concatenate the value of the input element, which has
an id of "search". Use the jQuery function called ```.val()``` to
get its value.

In the $.ajax call, it has two properties: "url" and "success". Give it a third
property called "dataType" and give it the value "jsonp".

Give the success property an anonymous function for its value, just like with
the weather app. Give it one parameter, called "data", not "res". It will still
work if you call it "res", but you need to know that you can call it anything,
so call the parameter "data" this time.

Inside of the success function, log the data parameter to the console, like you
did in the weather app (when data was called "res"). Then look at the data object in the console and find
the "title" property and the "snippet" property. You need to put these properties
into index.html with jQuery. You need to do this with jQuery, just like you did
in the weather app. Below is an example from the weather app:
```JavaScript
    $("#temp").html(res2.main.temp);
```

Then, empty the #articles div by putting empty quotes inside of the ```.html()```
method. This will delete the articles every time the user searches for a new
article by clicking the "submit" button.

Then create a for loop that loops through all the articles inside of data.

Inside of this for loop, get the title and the snippet from each article
and put them into some element tags. Then append them to index.html. An example is below:
```JavaScript
    $("#articles").append(
        "<a id='article' target='blank' href='https://en.wikipedia.org/wiki/'" + (title) + ">" +
            "<h3 id='title'>" + (title) + "</h3>" +
            "<p id='snippet'>" + (snippet) + "</p>"
        "</a>"
    );
```

Now, we need to fix the css.

    1. Center the search box and button
    2. Put the search box and the submit button on the same line by
    giving them both ```display: inline-block;```
    3. Remove the underline from the articles by giving each anchor tag (id="article") ```text-decoration: none;```
    4. Make it look better using whatever else you want to, such as colors, padding, margin, etc.
