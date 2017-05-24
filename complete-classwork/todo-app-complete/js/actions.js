const Task = require('./Task.js');

// check if localStorage already has data stored under the 'tasks' key
function checkStorage() {
    // JSON.stringify converts an object into a string
    if(JSON.stringify(data) === JSON.stringify({})) return true
    if(JSON.stringify(data) === 'null') return true
    return false
}

// JSON.parse converts a string into an object
let data = JSON.parse(localStorage.getItem('tasks'))
// if data is empty, set tasks to be {} in localStorage
if(checkStorage()) {
    // localStorage can only store strings as its values. This is why we
    // need to use JSON.stringify to convert the empty object {} to a string
    localStorage.setItem('tasks', JSON.stringify({}))
}

// data (line 12) is where we keep the state of our application. Every time
// we change data (new task, edit, or delete), we should updated localStorage
// to match this data object so that our data is still there when we refresh
// the page. The function below updates the 'tasks' key in localStorage to
// have the same value as our data object
function updateStorage() {
    // localStorage can only store strings as its values. This is why we
    // need to use JSON.stringify to convert the data object to a string
    localStorage.setItem('tasks', JSON.stringify(data))
}

function buildTasks() {
    let tasksList = ''

    // a 'for-in' loop will loop through all the keys/properties of an object.
    // The variable 'id' will hold each key as it loops through the data object
    for(let id in data) {
        // Here, we are concatentating a new task string to the tasksList string.
        // Remember that the Task function returns a string with HTML in it
        tasksList += Task(data[id], id)
    }

    return tasksList
    // tasksList, a long string with HTML in it, can be used like this:
    //
    //      tasksContainer.innerHTML = tasksList
    //
    // The above code will convert the tasksList string into HTML and place it
    // inside the tasksContainer element
}

function saveNewTask(text) {
    // create an id for the new task
    const id = Math.round(Math.random() * Math.pow(10, 9))
    // the following line will created a new key value pair if it doesn't exist
    data[id] = text
    // update localStorage to match the data object
    updateStorage()
}

function deleteTask(id) {
    // data the key/value pair from the data object
    delete data[id]
    // update localStorage to match the data object
    updateStorage()
}

function editTask(id, text) {
    // the following line will replace the value at data[id] with text's value
    data[id] = text
    // update localStorage to match the data object
    updateStorage()
}

// module.exports is an object {} by default. Here, we are created properties in it
module.exports.buildTasks = buildTasks
module.exports.saveNewTask = saveNewTask
module.exports.deleteTask = deleteTask
module.exports.editTask = editTask
