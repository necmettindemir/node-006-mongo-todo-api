const { MongoClient, ObjectID } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017/TodoApp';



MongoClient.connect(mongoUrl, (err, client) => {

    if (err) {
          console.log('Unable to connect to MongoDB');
          return;
    }

    console.log('Connected..');


    const db = client.db('TodoApp');

    //find
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


   //deleteOne   
   /*
   db.collection('Users').deleteOne({name:'name42'})
        .then( (res) => {
                console.log(res);
        });
    */
    



   //findOneAndDelete
   /*
   db.collection('Users').findOneAndDelete({name:'name42'})
        .then( (res) => {
                console.log(res);
        });
    */

    //deleteMany - v1   
    /*    
   db.collection('Users').deleteMany({name:'name42'})
   .then( 
        (res) => {
           console.log(res);
                 }
   );
   */


   //deleteMany - v2 - ok
   db.collection('Users').deleteMany({name:'name42'}).then(

            (res)=> {            
                console.log('record deletedCount :', res.deletedCount);                            
                console.log('result  :', res.result);                            
                console.log('result  :', res); 
            },
            (err) => {
                console.log('unable to delete record : ', err);
            }

        );


    db.close();

});