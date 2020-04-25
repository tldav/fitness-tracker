const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
	// const lastWorkout = req.params.length - 1;
	// Workout.findOne(lastWorkout)
	// 	.then((foundWorkout) => {
	// 		res.json(foundWorkout);
	// 	})
	// 	.catch((err) => {
	// 		res.status(400).json(err);
	//     });

	Workout.find({})
		.then((all) => {
			console.log(all);
			const lastWorkout = all.length - 1;
			res.json(lastWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

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
