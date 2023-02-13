const mongoose = require('mongoose')

const WorkSchema = new mongoose.Schema({
    productName: {type: String , require: true},
    title: {type: String, require: true},
    shortDesc: {type: String, require: true},
    body: {type: Array , require: true},
    image: {type: String , require: true},
    info: {type : Array , require: true}
},{timestamps: true})

export default mongoose.models.work ||mongoose.model("work",WorkSchema);