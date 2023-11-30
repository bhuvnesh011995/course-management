const router = require("express").Router();
const departmentManager = require("../../managers/constants/departmentManager");

router.post("/", [], departmentManager.addDepartment);
router.put("/:id", [], departmentManager.updateDepartment);
router.get("/", [], departmentManager.getAllDepartment);
router.get("/:id", [], departmentManager.getDepartmentById);
router.delete("/:id", [], departmentManager.deleteDepartment);

module.exports = router;
