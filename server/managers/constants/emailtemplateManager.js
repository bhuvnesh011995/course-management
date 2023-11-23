const db = require("../../models")


exports.addEmailtemplate = async(req,res,next)=>{
    try {
        let emailtemplate = await db.constants.emailtemplates.create(req.body)

        res.status(200).json(emailtemplate)
    } catch (error) {
        console.log(error)
        next(error)
    }
}


exports.getAllEmailtemplate = async(req,res,next)=>{
    try {
        let emailtemplates = await db.constants.emailtemplates.find()

        res.status(200).json(emailtemplates)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.getEmailtemplateById = async(req,res,next)=>{
    try {
        let emailtemplate = await db.constants.emailtemplates.findById(req.params.id)

        res.status(200).json(emailtemplate)

    } catch (error) {
        console.log(error)
        next(error)
    }
}


exports.updateEmailtemplate = async (req,res,next)=>{
    try {
        console.log(req.body,"body")
        console.log(req.params,"pararms")
        let emailtemplate = await db.constants.emailtemplates.findOneAndUpdate({_id:req.params.id},{
            $set:req.body
        },{new:true})

        res.status(200).json(emailtemplate)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteEmailtemplate = async (req,res,next)=>{
    try {
        await db.constants.emailtemplates.deleteOne({_id:req.params.id})
        res.status(204).end()
    } catch (error) {
        console.log(error)
        next(error)
    }
}