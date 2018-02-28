const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localHost/TodoApp',(err, client)=>{
    if(err){
        console.log('Unable to connect to mongodb')
    }
    console.log('Connected the database')
    const  db = client.db('TodoApp');
    
    // db.collection('Todos').deleteMany({
    //     name: 'Juan'
    // }).then((result) => {
    //     console.log(result);
    // });
    
    db.collection('Users').findOneAndDelete({
        name: 'Jose'
    }).then((result) => {
        console.log(result)
    })
})