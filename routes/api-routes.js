const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
	Workout.create(body)
		.then((newWorkout) => {
			console.log(newWorkout);
			res.json(newWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put("/api/workouts/:id", (req, res) => {
	Workout.updateOne(
		{ _id: req.params.id },
		{ $push: { exercises: req.body } }
	)
		.then((newExercise) => {
			console.log(newExercise);
			res.json(newExercise);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

module.exports = router;
