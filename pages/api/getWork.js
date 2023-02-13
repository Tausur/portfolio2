import Work from "../../model/Work";
import connectDB from '../../util/mongo'

const handler = async(req,res)=>{
    let works = await Work.find()
    res.status(200).json({works})
}

export default connectDB(handler)