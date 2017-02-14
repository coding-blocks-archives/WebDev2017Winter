/**
 * Created by championswimmer on 14/02/17.
 */
const Sequelize = require('sequelize');

const sequelize = new Sequelize("tdb", "tuser", "tpass", {
    host: 'localhost',
    dialect: 'mysql'
});

const Todo = sequelize.define('todos', {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        task: Sequelize.STRING,
        done: {type: Sequelize.BOOLEAN, defaultValue: false}
    });

sequelize.sync().then(function () {

});

function addTodo(task, done) {

    Todo.create({
        task: task,
    }).then(function () {
        done()
    }).catch(function () {
        done(new Error("Could not add"))
    })
}

function setDone(taskid, done) {
    Todo.update({
        where: {id: taskid},
        set: {done: true}
    }).then(function () {
        done();
    }).catch(function () {
        done (new Error("Could not update"))
    });
}

function getTodos(done) {

    Todo.findAndCountAll({
        attributes: ['id', 'task', 'done']
    }).then(function (data) {
        done(data.rows);
    })
}

module.exports = {
    addTodo, getTodos
};

