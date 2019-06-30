
var myExpress       = require('express');
var bodyParser      = require('body-parser');
var { ObjectID } = require('mongodb');

var { myMongoose }  = require('./db/mongoose');
var { Todo }        = require('./models/todo');
var { User }        = require('./models/user');

var app = myExpress();

app.use(bodyParser.json());

app.post('/todos', (req,  res) => {
    console.log(req.body);

    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then( 
        (doc) => {
            res.send(doc);
              },
        (err) => {
            res.status(400).send(err);
        }
    );

});


app.get('/todos', (req,res) => {

    Todo.find().then( 
        (todos) => {
            res.send({todos});
        },
        (err) => {
            res.status(400).send(err);
        }
    );

});


//GET /todos/121212
app.get('/todos/:id', (req, res) => {
    //res.send(req.params);

    //valid id using isValid
        //404  - send back empty

    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }       

    // findById
        //success
            //if todo - send it back
            //if no todo - send back 404 with empty body
        //error
            // 400 - send empty back
        
    Todo.findById(id).then( (todo) => {
        if (!todo)
        {
            res.status(404).send();
        }

        res.send({todo});

    }).catch( (e) => {
        res.status(400).send();
    } );


});


app.listen(3000, () => {
    console.log('started on port 3000');
});


module.exports = { app };