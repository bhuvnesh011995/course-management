const db = require("../../models")

exports.updateConfig = async (req,res,next)=>{
    try {
        const {name,footer} = req.body
        let obj = {}
        if(name) obj.name = name
        if(footer) obj.footer = footer
        if(req.files && req.files.logo && req.files.logo[0]) obj.logo = req.files.logo[0].filename
        if(req.files && req.files.fevicon && req.files.fevicon[0]) obj.fevicon = req.files.fevicon[0].filename

        const updateData = await db.config.systemConfig.findOneAndUpdate({},{$set:obj},{new:true})
        res.status(200).json(updateData)
    } catch (error) {
        next(error)
    }
}

exports.getSystemConfig = async (req,res,next)=>{
    try {
        const systemConfig = await db.config.systemConfig.findOne({})
        res.status(200).json(systemConfig)

    } catch (error) {
        next(error)
    }
}