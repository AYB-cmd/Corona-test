
var list = document.querySelector('ul');
var userInput = document.querySelector('#input');
var form = document.querySelector('form');
var btn = document.querySelector('button');



btn.addEventListener('click',() => {
    
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
    return list
});



form.addEventListener('submit', function(e) {
    e.preventDefault();
    todoMaker(userInput.value)
    userInput.value = ''
})

var todoMaker = function(text) {
    var todo = document.createElement('li')
    todo.textContent = text;
    list.appendChild(todo)
}







