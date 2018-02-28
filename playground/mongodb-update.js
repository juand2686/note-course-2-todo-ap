const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localHost/TodoApp',(err, client)=>{
    if(err){
        console.log('Unable to connect to mongodb')
    }
    console.log('Connected the database')
    const  db = client.db('TodoApp');
    
    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectId("5a94b367b6ba6c0b7daef523")
    // },{
    //     $set : {
    //         name : "Juan"
    //     }
    // },{
    //     returnOriginal : false
    // }).then((result) => {
    //     console.log(result);
    // })
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("5a94b384c26ee30b8f0d57c3")
    },{
        $set:{
            name: "Roberto"
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    })
  
})