const route = require("express").Router();
const languageManager = require("../managers/languageManager")
route.get("/",[],languageManager.getAllTheLanguage)
route.get("/language",[],languageManager.getById)
route.post("/",[],languageManager.addLanguage)
route.put("/",[],languageManager.updateLanguageKey)
route.delete("/",[],languageManager.deleteLanguage)


module.exports = route