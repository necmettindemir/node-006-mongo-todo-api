const { MongoClient, ObjectID } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017/TodoApp';



MongoClient.connect(mongoUrl, (err, client) => {

    if (err) {
          console.log('Unable to connect to MongoDB');
          return;
    }

    console.log('Connected..');


    const db = client.db('TodoApp');

  

   
   db.collection('Todos').findOneAndUpdate(
       { _id : new ObjectID('5d0e29310693de3ed45e0f10') },
       {
            $set: {
                text: 'text0001',
                comleted:true
            }    
       }
    ).then( (res) => {
        console.log(res);
    });


    db.close();

});