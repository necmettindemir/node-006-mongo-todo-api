const expect = require('expect');
const request = require('supertest');

const { ObjectID } = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');


const todos = [
    {
        _id  : new ObjectID(), 
        text : "first--2"        
    },
    {
        _id  : new ObjectID(), 
        text:"second--2"
    }    
];

beforeEach( (done) => {
    Todo.remove({}).then( ()=> {
        //done();
        return Todo.insertMany(todos);
    }).then( () => { 
        done(); 
    });
});

describe('POST /todos', () => {

    it('should create a new todo', (done) => {
        
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect( (res) => {
                expect(res.body.text).toBe(text);               
            }).end( (err,res) => {

                if (err) {                    
                    return done(err);
                }

                Todo.find().then( (todos) => {
                    expect(todos.length).toBe(3);
                    expect(todos[2].text).toBe(text);
                    done();
                }).catch(  (e) => done(e) );
                    
            });

    });


    it('it should not create todo with invalid body data',(done)=> {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end( (err,res) => {

            if (err) {                    
                return done(err);
            }

            Todo.find().then( (todos) => {
                expect(todos.length).toBe(2);                
                done();
            }).catch(  (e) => done(e) );
                
        });
    });
    
});


describe('GET /todos', () => {
    it('should get all todos', (done) => {
        
        request(app)
            .get('/todos')
            .expect(200)
            .expect( (res) => {
            expect(res.body.todos.length).toBe(2); 
            })
            .end(done);
    });
});



describe('GET /todos/:id', () => {

    it('should get todo with id', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect( (res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            }).
            end(done);
    });

    it('should return 404 if todo not found', (done) => {
        //make sure you get a 404 back

        var hexId = new  ObjectID().toHexString();

        request(app)
            .get(`/todos/${hexId}`)
            .expect(404)
            .end(done);

    }); 

    it ('should return 404 for non-object ids', (done) => {
        //   /todos/123

        request(app)
            .get('/todos/123aaa')
            .expect(404)
            .end(done);

    });


});