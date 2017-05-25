// inside of require, don't use ./ when the package is from node_modules,
// but when it is a file, we need to use ./, like when we type require('./action.js')
// in index.js. The ./ tells require to look in the same folder for actions.js
const escape = require('escape-html')

function Task(text, id) {
    return `
        <div class="task" id="${id}">
            <p class="text">${escape(text)}</p>
            <button class="edit">✎</button>
            <button class="delete">✖</button>
        </div>
    `
    // if we don't escape the text (user input), our site is vulnerable to
    // 'cross-site-scripting' or 'XSS' attacks. For example, it would be bad if
    // text's value was '<script>document = null</script>', which would delete
    // everything
}

// in actions.js, we typed:
//
//        module.exports.buildTasks = buildTasks.
//
// Here, we are saying that module.exports is no longer an object; now it is
// a function called Task. That means, when we require('./Task.js'), it's return
// value is the Task function, instead of an object, like in actions.js
module.exports = Task
