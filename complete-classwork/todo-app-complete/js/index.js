const formInput = document.querySelector('.form input')
const tasksContainer = document.querySelector('.tasks-container')
const editor = document.querySelector('.editor')
const editorInput = document.querySelector('.editor input')
// save the module.exports object inside the actions variable
const actions = require('./actions.js')

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
