var mongoose = require('mongoose');

const mongoURL =  'mongodb://localhost:27017/TodoApp';


mongoose.Promise = global.Promise;
mongoose.connect(mongoURL);


// Todo is like class in OOP
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


// TodoObj is like instance in OOP
var TodoObj = new  Todo( {
    text: 'todo2'
});

TodoObj.save().then( 
    (doc) => { console.log('saved ', doc); },
    (err) => { console.log('unable to save todo : ' ,err); }
);


