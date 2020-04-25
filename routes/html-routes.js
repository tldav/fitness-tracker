const router = require("express").Router();
const path = require("path");

// displays the html pages when hitting the appropriate endpoint.
router.get("/stats", (req, res) => {
	res.sendfile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (req, res) => {
	res.sendfile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;
