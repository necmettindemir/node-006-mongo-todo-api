
const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id ='5d17c75332afe937b0c9c749';
    //'5d17c75332afe937b0c9c749';

if (!ObjectID.isValid(id))
{
    console.log('id not valid');
}
/* 
Todo.find({
    _id: id,    
}).then( (todos) => {
    console.log('Todos',todos);
});

Todo.findOne({
    _id:id
}).then( (todo) => {
    console.log('Todo : ' ,todo);
}); */

Todo.findById(id).then( (todo) => {
    if (!todo)
    {
        console.log('id not found');
    }
    
    console.log('Todo By Id ', todo);
}).catch( (e) => {
    console.log(e);
});