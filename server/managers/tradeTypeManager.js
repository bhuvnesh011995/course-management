const db = require("../models")


exports.updateTradeType = async (req,res,next)=>{
    try {
        let trydeType = await db.tradeTypeModel.findOneAndUpdate({_id:req.params.id},{
            $set:{seat:req.body.seat}
        },{new:true})
        res.status(200).json(trydeType)
    } catch (error) {
        console.log(error)
        next(error)
    }
}


exports.getallTradeType = async (req,res,next)=>{
    let arr = await db.tradeTypeModel.find({})
    res.status(200).json(arr)
}