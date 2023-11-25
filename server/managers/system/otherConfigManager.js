const db = require("../../models")



exports.updateConfig = async (req,res,next)=>{
    try {
        const {defaultLanguage} = req.body
        let obj = {}
        if(defaultLanguage) obj.defaultLanguage = defaultLanguage
        if(req.files && req.files.leadLogo && req.files.leadLogo[0]) obj.leadLogo = req.files.leadLogo[0].filename
        if(req.files && req.files.attendanceLogo && req.files.attendanceLogo[0]) obj.attendanceLogo = req.files.attendanceLogo[0].filename

        const updateData = await db.config.otherConfig.findOneAndUpdate({},{$set:obj},{new:true})
        res.status(200).json(updateData)
    } catch (error) {
        next(error)
    }
}

exports.getSystemConfig = async (req,res,next)=>{
    try {
        const systemConfig = await db.config.otherConfig.findOne({})
        res.status(200).json(systemConfig)
        
    } catch (error) {
        next(error)
    }
}