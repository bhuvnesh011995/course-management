const {Schema,model} = require("mongoose")

let schema = new Schema({
    name:String,
    value:Number
},{
    collection:"duration"
})


module.exports = model("duration",schema)