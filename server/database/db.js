import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from 'mongodb';


const Connection = async () =>{
    const URL = "mongodb+srv://MyDocs:MyDocs@mydocs.f99fu3l.mongodb.net/?retryWrites=true&w=majority";;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("connected to mongoDB");
    }catch(error){
        console.log("Error while using mongoDB ",error);
    }
}

export default Connection;