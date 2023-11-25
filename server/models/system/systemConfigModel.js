const {Schema,model} = require("mongoose")

const schema = new Schema({
    name:{type:String,default:""},
    logo:{type:String,default:""},
    fevicon:{type:String,default:""},
    footer:{type:String,default:""},
},{collection:"systemConfig"})


module.exports = model("systemConfig",schema)