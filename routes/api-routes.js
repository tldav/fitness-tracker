const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
	Workout.create(body)
		.then((dbWorkout) => {
			console.log(dbWorkout);
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put("/api/workouts/:id", (req, res) => {
	Workout.updateOne({ _id: req.params.id }, {});
});

module.exports = router;
