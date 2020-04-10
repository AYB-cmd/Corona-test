
var list = document.querySelector('ul');
var userInput = document.querySelector('#input');
var form = document.querySelector('form');
var btn = document.querySelector('button');
var todoArrey = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];


localStorage.setItem('todos',JSON.stringify(todoArrey));

var storage = JSON.parse(localStorage.getItem('todos'));

form.addEventListener('submit', function(e) {
    e.preventDefault();
    todoArrey.push(userInput.value);
    localStorage.setItem('todos',JSON.stringify(todoArrey));
    todoMaker(userInput.value);
    userInput.value = "";
})

var todoMaker = function(text) {
    var todo = document.createElement('li')
    todo.textContent = text;
    list.appendChild(todo)
}

for (let i = 0; i < storage.length; i++ ) {
    
    todoMaker(storage[i]);
}

btn.addEventListener('click',() => {
    window.localStorage.clear();
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
});






