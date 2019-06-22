const { MongoClient, ObjectID } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017/TodoApp';




MongoClient.connect(mongoUrl, (err, client) => {

    if (err) {
          console.log('Unable to connect to MongoDB');
          return;
    }

    console.log('Connected..');


    const db = client.db('TodoApp');

    /*
    db.collection('Todos').find({
        _id: new ObjectID('5d0e296750110b250454db42')
    }).toArray().then(

        (docs)=> {
        
            console.log('Todos');
            console.log(JSON.stringify(docs, 'undefined',2));
        
        },
        (err) => {
            console.log('unable to fetch todos : ', err);
        }

    );
    */

   db.collection('Users').find({name:'name1'}).count().then(

            (count)=> {            
                console.log('record count :', count);                            
            },
            (err) => {
                console.log('unable to fetch todos : ', err);
            }

        );


    db.close();

});