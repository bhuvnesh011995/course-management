const route = require("express").Router();
const languageManager = require("../managers/languageManager");
const { userAuth } = require("../middlewares/auth.middleware");


route.get("/lang", languageManager.getAllTheLanguagesNameAndCode);
route.get("/", languageManager.getAllTheLanguage);
route.get("/language", languageManager.getByCode);
route.get("/:id",[userAuth ],languageManager.getById);
route.post("/", [userAuth], languageManager.addLanguage);
route.put("/:id", [userAuth], languageManager.updateLanguageKey);
route.put("/language/:id", [userAuth], languageManager.updateLanguage);
route.delete("/:id", [userAuth], languageManager.deleteLanguage);

module.exports = route;
