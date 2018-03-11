const {ObjectID} = require('mongoose');


const {mongoose} = require('./../server/db/mongoose');
const {Todo}     = require('./../server/models/todo');
const {User}     = require('./../server/models/user');

var id = '5a9b39bf58e97212fd33c906'
var userId = '5a97631f858a1b095a7762c5'


// Todo.remove({}).then((todo) => {
//     console.log(todo);
// })

// Todo.findOneAndRemove({
//     _id:'5aa46e9fe90e3909975026a8'
// }).then((todo) =>{
//     console.log(todo)
// })

Todo.findByIdAndRemove('5aa46e8ce90e3909975026a7').then((todo) =>{
    console.log(todo);
});