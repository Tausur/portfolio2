import Work from '../../model/Work'
import connectDB from '../../util/mongo'

const handler = async (req,res)=>{
    if(req.method == 'POST'){
        let works = await Work.findByIdAndUpdate(req.body.id,req.body)
        res.status(200).json({success : "WorkBlog has been successfully updated"})
    }else{
        res.status(404).json({error : "This method is not allowed"})
    }
}

export default connectDB(handler)