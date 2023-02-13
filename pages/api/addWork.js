import Work from '../../model/Work'
import connectDB from '../../util/mongo'

const handler = async(req,res)=>{
    if(req.method == 'POST'){
        let addWork = new Work({
            productName : req.body.productName,
            title : req.body.title,
            shortDesc : req.body.shortDesc,
            body : req.body.body,
            image : req.body.image,
            info : req.body.info
        })
        await addWork.save()
        res.status(200).json('success')
    }else{
        res.status(404).json('error')
    }
}

export default connectDB(handler)