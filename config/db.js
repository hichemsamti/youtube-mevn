const mongoose= require('mongoose')

const DBconnection = async () =>{
    const conn =await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
    }).catch(err=>{
        console.log("cannot connect to DB".red,err)

    })

    console.log(`MongoDB:connected: ${conn.connection.host}`.black.bgYellow)


}

module.exports=DBconnection