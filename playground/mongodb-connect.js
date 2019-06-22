//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017/TodoApp';

/*
var user = {name:'', age:0 };
var { name} = user;
console.log(name);
*/

/*
var obj = new ObjectID();
console.log('obj: ' + obj);
*/

MongoClient.connect(mongoUrl, (err, client) => {

    if (err) {
          console.log('Unable to connect to MongoDB');
          return;
    }

    console.log('Connected..');


    // const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //         text: 'sth todo2',
    //         completed: true
    // }, (err, result)=> {
    //     if (err) {
    //         console.log('unable to insert todo');
    //         return;
    //     }

    //     console.log(JSON.stringify(result.ops, 'undefined',2));
    // });


    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
            //_id: 124,
            name: 'name4',
            age: 26,
            location: 'London'
    }, (err, result)=> {
        if (err) {
            console.log('unable to insert user');
            return;
        }

        console.log(JSON.stringify(result.ops, 'undefined',2));
        console.log(JSON.stringify(result.ops[0]._id, 'undefined',2));
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), 'undefined',2));
    });



    db.close();

});