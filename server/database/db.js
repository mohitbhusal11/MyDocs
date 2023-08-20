import mongoose from "mongoose";

const Connection = async (username = 'mydocs', password= 'mydocs') =>{
    const URL = `mongodb://${username}:${password}@ac-tqjwlfc-shard-00-00.woszm8x.mongodb.net:27017,ac-tqjwlfc-shard-00-01.woszm8x.mongodb.net:27017,ac-tqjwlfc-shard-00-02.woszm8x.mongodb.net:27017/?ssl=true&replicaSet=atlas-1296i6-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("connected to mongoDB");
    }catch(error){
        console.log("Error while using mongoDB ", error);
    }
}

export default Connection;