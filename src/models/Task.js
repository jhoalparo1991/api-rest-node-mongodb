import { Schema,model } from "mongoose";


const TaskSchema = new Schema({
    title : {
        type:String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : false,
        trim : true
    },
    done : {
        type: Boolean,
        default : false
    }
},{
    versionKey : false,
    timestamps : true
});

export default model('Task',TaskSchema);