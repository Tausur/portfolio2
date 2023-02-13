import Blog from '../../model/Blog'
import connectDB from '../../util/mongo'

const handler = async(req,res)=>{
    if(req.method == 'POST'){
        let addBlog = new Blog({
            BlogName : req.body.BlogName,
            title : req.body.title,
            shortDesc : req.body.shortDesc,
            body : req.body.body,
            image : req.body.image
        })
        await addBlog.save()
        res.status(200).json('success')
    }else{
        res.status(404).json('error')
    }
}

export default connectDB(handler)