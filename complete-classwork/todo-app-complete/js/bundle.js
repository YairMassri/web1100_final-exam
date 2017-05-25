/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Task = __webpack_require__(1);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// inside of require, don't use ./ when the package is from node_modules,
// but when it is a file, we need to use ./, like when we type require('./action.js')
// in index.js. The ./ tells require to look in the same folder for actions.js
const escape = __webpack_require__(3)

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const formInput = document.querySelector('.form input')
const tasksContainer = document.querySelector('.tasks-container')
const editor = document.querySelector('.editor')
const editorInput = document.querySelector('.editor input')
// save the module.exports object inside the actions variable
const actions = __webpack_require__(0)

function renderTasksContainer() {
    // buildTasks() returns a string with HTML in it
    // if innerHTML's value is a string, it will be rendered as HTML
    tasksContainer.innerHTML = actions.buildTasks()
}

// render the tasks when the page loads
renderTasksContainer()

formInput.addEventListener('keypress', function(e) {
    // if the user presses the 'enter' key
    if(e.keyCode === 13) {
        actions.saveNewTask(e.target.value)
        // after a task is added to the model (the data object in actions.js),
        // we need to update the view by calling renderTasksContainer()
        renderTasksContainer()
        // empty the input
        formInput.value = ''
    }
})

// listen for clicks on the tasks-container instead of on each task and then
// check if certain child were clicked on.
// You might be thinking, "Why can't we put a listener on each task or button?"
// and the reason why is because those listeners will not apply to NEW tasks
tasksContainer.addEventListener('click', function(event) {
    // event.target is the exact element that is clicked on, whereas
    // event.currentTarget will always be tasksContainer or whatever the event
    // listener is attached to

    // paragraph element inside of a task
    if(event.target.classList.contains('text')) {
        event.target.classList.toggle('completed')
    }

    // delete button
    if(event.target.classList.contains('delete')) {
        const id = event.target.parentElement.id
        actions.deleteTask(id)
        // after a task is deleted from the model (the data object in actions.js),
        // we need to update the view by calling renderTasksContainer()
        renderTasksContainer()
    }

    // edit button
    if(event.target.classList.contains('edit')) {
        // editor.dataset.id will create a data-id attribute on the
        // editor element that will look like this:
        // <div class="editor" data-id="7530113850">...</div>
        editor.dataset.id = event.target.parentElement.id
        // open the editor
        editor.classList.toggle('open')
        // get the task's text from it's paragraph element and set that as the
        // value of the editor's input element
        editorInput.value = event.target.previousSibling.previousSibling.textContent
        // focus on editor input
        editorInput.focus()
    }
})

editorInput.addEventListener('keypress', function(e) {
    // if the user presses the 'enter' key
    if(e.keyCode === 13) {
        // close the task editor
        editor.classList.remove('open')
        // update the model
        actions.editTask(editor.dataset.id, editorInput.value)
        // update the view
        renderTasksContainer()
    }
})


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


/***/ })
/******/ ]);