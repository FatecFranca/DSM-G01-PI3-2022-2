const express = require("express");
const router = express.Router();
const controller = require("../controllers/assessment");

router.post("/", controller.create);
router.get("/", controller.retrieveAll);
router.get("/:id", controller.retrieveOne);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

/* rotas para answer */
router.post("/:assessment_id/answer", controller.createAnswer);
router.get("/:assessment_id/answer", controller.retrieveAllAnswers);
router.get("/:assessment_id/answer/:id", controller.retrieveOneAnswer);
router.patch("/:assessment_id/answer/:id", controller.updateAnswer);
// router.delete("/:assessment_id/answer/:id", controller.deleteAnswer);

module.exports = router;
