const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/mongodb_demo';
//connection
mongoDBClient.connect(url,{ useUnifiedTopology: true },(operationError,  dbHandler)=> {


    if(operationError){

        console.log("Error");
    }else{

        console.log("connected to database")
        //insert operation
        // let data ={id:1,name:"added a  new name"};
        // dbHandler.db('mongodb_demo').collection('names').insertOne(data,(operr, opresult)=>{
        //     if(operr){
        //         console.log("Unable to insert the data");
        //     }else{
        //         console.log("insert successful!!")
        //     }


        // })
        // dbHandler.close()
        //setTimeout()
        //List operations
        // dbHandler.db('mongodb_demo').collection('names').find().toArray((operr,opresult)=>{
        //     if(operr){
        //         console.log(operr)
        //     }else{
        //         for(var i=0; i<opresult.length;i++){
        //             console.log(opresult[i])
        //         }
        //     }
        // });

        //Fetch operations
        // dbHandler.db('mongodb_demo').collection('names').findOne({id:1},(operr,opresult)=>{
        //         if(operr){
        //             console.log(error)
        //         }else{
        //             console.log(opresult)
        //         }

        // })

        // //update operations
        //     let newdata ={$set: {id:1,name:"added a  new name1"}};
        // dbHandler.db('mongodb_demo').collection('names').updateOne({id:1},newdata,(operr, opresult)=>{
        //     if(operr){
        //         console.log("Unable to insert the data");
        //     }else{
        //         console.log("Updated successful!!")
        //     }


        // })

    //delete operations
    // dbHandler.db('mongodb_demo').collection('names').deleteOne({id:1},(operr, opresult)=>{
    //         if(operr){
    //             console.log("Unable to delete the data");
    //         }else{
    //             console.log(opresult)
    //             console.log("Deleted successful!!")
    //         }


    //     })

        //Bulk Delete
        // dbHandler.db('mongodb_demo').collection('names').deleteMany({id:1},(operr, opresult)=>{
        //     if(operr){
        //         console.log("Unable to delete the data");
        //     }else{
        //         console.log(opresult)
        //         console.log("Deleted successful!!")
        //     }


        // })
        
    }


});