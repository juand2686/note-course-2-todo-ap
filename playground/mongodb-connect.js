//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');




MongoClient.connect('mongodb://localhost/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something else to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //       return console.log('Unable to insert todos', err); 
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    //  db.collection('Users').insertOne({
    //      name: 'Juan Fernando',
    //      age : 33,
    //      location: 'Miami'
    //  }, (err, result) => {
    //      if(err){
    //          return console.log('Unable to insert Users', err);
    //      }
    //      console.log(JSON.stringify(result.ops, undefined, 2))
    //  })
     
    // client.close();
})
