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
    let {code}=req.query
    console.log(code,"code")
    try {
        if(code==="undefined" || !code || code==="null"){
            let language = await db.language.findOne({}).select({ language:1,_id:0,code:1})
            console.log(language,"lan")
            return res.status(200).json(language)
        }else{
            let language = await db.language.findOne({ code}).select({language:1,_id:0,code:1})
            console.log(language,"lang")
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

        res.status(200).json(languages)
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
console.log(obj)
        
        await db.language.findOneAndUpdate({_id:id}, {
            $set: obj
        })

        res.status(204).end()


    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "error occured",
        })
    }
}


exports.updateLanguage = async (req,res,next)=>{
try {
    let {name,code} = req.body
    let {id} = req.params

    await db.language.findOneAndUpdate({_id:id}, {
        $set: {name,code}
    })

    res.status(204).end()
} catch (error) {
    console.log(error)
        res.status(500).json({
            success: false,
            message: "error occured",
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