import mongoose from "mongoose";
//sJHiJF4yCgvXAfbI
function initDB(){
    if(mongoose.connections[0].readyState){
        return;
    }
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    mongoose.connection.on('connected',()=>{
        console.log('Mongoose is connected')
    });
    mongoose.connection.on('error',(err)=>{
        console.log('Mongoose connection error: '+err)
    });
}
export default initDB;