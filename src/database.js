import mongoose from 'mongoose';
import variables from './config/variables';

(async()=>{
    try {
        const db = await mongoose.connect(variables.mongodb_uri,{
            useNewUrlParser: true,
           useUnifiedTopology:true
        });
        console.log('Database is connected to -> ', db.connection.name);
    } catch (error) {
        console.error("Error in connection -> ",error);
    }
})()