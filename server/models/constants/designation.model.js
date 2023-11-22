const {Schema,model} = require("mongoose")

const schema = new Schema({
    name:String
},{
    collection:"designation"
})


module.exports = model("designation",schema)