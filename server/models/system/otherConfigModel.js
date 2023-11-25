const {Schema,model} = require("mongoose")

const schema = new Schema({
    leadLogo:{
        type:String,
        default:""
    },
    attendanceLogo:{
        type:String,
        default:""
    },
    defaultLanguage:{type:Schema.Types.ObjectId,ref:"languages",default:null},
},{collection:"otherConfig"})


module.exports = model("otherConfig",schema)