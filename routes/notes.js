const express = require("express")
const router = express.Router()
const controllers = require("../controllers/notes")

router.post("/addNotes",controllers.addNotes)
router.get("/notes",controllers.getAll)
router.get("/notes/:id",controllers.byId)
router.put("/notes/:id",controllers.edit)
router.delete("/notes/:id",controllers.delete)

module.exports = router

