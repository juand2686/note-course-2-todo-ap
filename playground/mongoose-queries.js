const {ObjectID} = require('mongoose');


const {mongoose} = require('./../server/db/mongoose');
const {Todo}     = require('./../server/models/todo');
const {User}     = require('./../server/models/user');

var id = '5a9b39bf58e97212fd33c906'
var userId = '5a97631f858a1b095a7762c5'

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos => {
//     console.log('todos', todos);
// }));

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log (e));


//User.findbyId
// User.findbyId(userId).then((user) => {
//     if(!user){
//         return console.log('Not user found')
//     }
//     console.log('user:', user);
// }).catch((e) => console.log(e));

User.find({
    _id : userId
}).then((user)=>{
    console.log(user);
})

User.findById(userId).then((user)=>{
    if(!user){
        return console.log('not user found')
    }
    console.log('user:', user);
}).catch((e) => console.log(e));