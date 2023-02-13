const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    BlogName: {type: String , require: true},
    title: {type: String, require: true},
    shortDesc: {type: String, require: true},
    body: {type: Array , require: true},
    image: {type: String , require: true}
},{timestamps: true})

export default mongoose.models.Blog ||mongoose.model("Blog",BlogSchema);