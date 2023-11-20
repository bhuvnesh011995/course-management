const route = require("express").Router();
const languageManager = require("../managers/languageManager")
route.get("/",[],languageManager.getAllTheLanguage)
route.get("/language",[],languageManager.getById)
route.post("/",[],languageManager.addLanguage)
route.put("/:id",[],languageManager.updateLanguageKey)
route.put("/language/:id",[],languageManager.updateLanguage)
route.delete("/:id",[],languageManager.deleteLanguage)


module.exports = route