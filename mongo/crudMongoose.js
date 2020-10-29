const mongoose =require("mongoose")
const namesModel =require("./models/nameSchema")
let url = 'mongodb://localhost:27017/mongodb_demo';

mongoose.connect(url,{ useUnifiedTopology: true },{ useNewUrlParser: true })
.then(()=>{
    console.log("connected to database")
    //List all entries
    // namesModel.find({})
    // .then((data)=>{

    //     console.log(data)
    // })
    // .catch((connectionError)=>{
    //     console.log(connectionError)
    //     mongoose.connection.close()

    // })
    //fetch one document

    // namesModel.find({id:1})
    // .then((data)=>{

    //     console.log(data)
    // })
    // .catch((connectionError)=>{
    //     console.log(connectionError)
    //     mongoose.connection.close()

    // })
    //fetch by ID
    // namesModel.find("5f9afe7d02a2568beceee0df")
    // .then((data)=>{

    //     console.log(data)
    // })
    // .catch((connectionError)=>{
    //     console.log(connectionError)
    //     mongoose.connection.close()

    // })

let newData =new namesModel({id:10,name:"Testing Mongoose"})
namesModel.insertMany(newData)
    .then((data)=>{

        console.log(data)
    })
    .catch((connectionError)=>{
        console.log(connectionError)
        mongoose.connection.close()
    }
    )
})