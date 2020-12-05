import Task from '../models/Task';

export default {

    getAll : async (req,res)=>{
       try {
        await Task.find((err,data)=>{
            if(err) return res.status(404);
            return   res.json({
                data
            })
        })
       } catch (error) {
          console.error(error); 
       }
    },
    getOneById : async(req,res)=>{
     try {
        await Task.findById(req.params.id,(err,data)=>{
            if(err) return res.status(404);
            return   res.json({
                data
            })
        })
     } catch (error) {
         console.error(error);
     }
    },
    addTask : async (req,res)=>{
       try {
        const { title,description,done } = req.body;

        const newTask = new Task({
            title,
            description,
            done
        })

        await newTask.save((err,data)=>{
            if(err) return res.status(404);
            return   res.json({
                data
            })
        })
       } catch (error) {
           console.error(error);
       }      
    },
    delete : async(req,res)=>{
        try {
            const id = req.params.id;
           await Task.findByIdAndDelete({_id:id},(err,data)=>{
            if(err) return res.status(404).json({message:'Task not found'});
            return   res.json({
                message : 'Task deleted'
            })
           });
        } catch (error) {
            console.error(error);
        }
    },
    update : async(req,res)=>{
        try {
            await Task.findOneAndUpdate({_id:req.params.id},req.body,{ new:true},(err,data)=>{
                if(err) return res.status(404).json({message:'Task not found'});
                return   res.json({
                    data
                })
            })
        } catch (error) {
            console.error(error);
        }
    }





}