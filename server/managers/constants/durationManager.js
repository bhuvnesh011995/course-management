const db = require("../../models")


exports.addDuration = async(req,res,next)=>{
    try {
        let duration = await db.constants.duration.create(req.body)

        res.status(200).json(duration)
    } catch (error) {
        console.log(error)
        next(error)
    }
}


exports.getAllDuration = async(req,res,next)=>{
    try {
        let durations = await db.constants.duration.find()

        res.status(200).json(durations)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.getDurationById = async(req,res,next)=>{
    try {
        let duration = await db.constants.duration.findById(req.params.id)

        res.status(200).json(duration)

    } catch (error) {
        console.log(error)
        next(error)
    }
}


exports.updateDuration = async (req,res,next)=>{
    try {
        let duration = await db.constants.duration.findOneAndUpdate({_id:req.params.id},{
            $set:req.body
        },{new:true})

        res.status(200).json(duration)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteDuration = async (req,res,next)=>{
    try {
        await db.constants.duration.deleteOne({_id:req.params.id})
        res.status(204).end()
    } catch (error) {
        console.log(error)
        next(error)
    }
}