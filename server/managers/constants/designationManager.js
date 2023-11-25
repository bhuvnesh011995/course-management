const db = require("../../models")


exports.addDesignation = async(req,res,next)=>{
    try {
        let designation = await db.constants.designation.create(req.body)

        res.status(200).json(designation)
    } catch (error) {
        console.log(error)
        next(error)
    }
}


exports.getAllDesignation = async(req,res,next)=>{
    try {
        let designations = await db.constants.designation.find()

        res.status(200).json(designations)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.getDesignationById = async(req,res,next)=>{
    try {
        let designation = await db.constants.designation.findById(req.params.id)

        res.status(200).json(designation)

    } catch (error) {
        console.log(error)
        next(error)
    }
}


exports.updateDesignation = async (req,res,next)=>{
    try {
        let designation = await db.constants.designation.findOneAndUpdate({_id:req.params.id},{
            $set:req.body
        },{new:true})

        res.status(200).json(designation)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteDesignation = async (req,res,next)=>{
    try {
        await db.constants.designation.deleteOne({_id:req.params.id})
        res.status(204).end()
    } catch (error) {
        console.log(error)
        next(error)
    }
}