var mongojs = require('mongojs');
var db = mongojs('mongodb://hadar/todo-app', ['todos']);

var todos = {

    getAllTodos: function (callback) {
        db.todos.find(callback);
    },
    saveTodo: function (todo, callback) {
        db.todos.insert(todo, callback);
    },
    updateTodo: function (todo, callback) {
        db.todos.update({
            id: todo.id
        }, todo, {}, callback);
    },
    deleteTodo: function (id, callback) {
        db.todos.remove({
            id: id
        }, '', callback);
    }
}

module.exports = todos;