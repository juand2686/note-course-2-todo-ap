const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongodb server')
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');
    
//   db.collection('Todos').find({
//       _id: new ObjectId('5a94b33c487b630b2d7653d0')
//   }).toArray().then((docs) => {
//       console.log('Todos');
//       console.log(JSON.stringify(docs, undefined, 2))
//   }, (err) => {
//       console.log('Unable to fetch docs', err);
//   });
   
//   db.collection('Todos').find().count().then((docs) =>{
//      console.log(`Todos : ${docs}`);  
//   }, (err) => {
//       console.log('unable to fetch database', err)
//   })
    
    db.collection('Users').find({
        name: 'Juan'
    }).toArray().then((docs) => {
        console.log('Users')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch database', err)
    });
    
})