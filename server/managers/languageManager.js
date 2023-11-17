const db = require("../models")



exports.addLanguage = async function (req,res,next){
    const {name,code} = req.body

    try {
        await db.language.create({name,code})

        res.status(201).end()
    } catch (error) {
        console.log(error)
        
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }
}






exports.getById= async function (req, res, next) {
    let {id}=req.query
    
    try {
        if(!id){
            let language = await db.language.findOne({}).select({ name: 1,language:1, code: 1, status: 1 })
            if(!language) return res.status(500).json({
                success: false,
                message: "error occured"
            })

            return res.status(200).json(language)
        }else{
            let language = await db.language.findOne({ _id: id}).select({ name: 1,language:1, code: 1, status: 1 })
        res.status(200).json(language)
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "error occured"
        })
    }
}

exports.getAllTheLanguage=async function(req,res,next){

    try {
        let languages = await db.language.find({})

        if(!languages) return res.status(500).json({
            success:true,
            message:"error occured"
        })

        res.status(200).json({
            success:true,
            languages
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }

}


exports.updateLanguageKey = async function (req, res, next) {
    try {
        let updateData = req.body
        let {id} = req.params

        let keys = Object.keys(updateData)

        let obj = keys.reduce((acc,curr)=>{
            acc[`language.${curr}`] = updateData[curr]
            return acc
        },{})

        
        await db.language.findOneAndUpdate({_id:id}, {
            $set: obj
        })

        res.status(204).end()


    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "error occured",
            error: error
        })
    }
}




exports.deleteLanguage = async (req,res,next)=>{

    const {id} = req.params

    try {
        let languageExist = await db.language.exists({_id:id})
        if(!languageExist) return res.status(401).end()

        await db.language.deleteOne({_id:id})

        res.status(204).end()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }
}