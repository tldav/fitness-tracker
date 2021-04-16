const router = require("express").Router();
// Don't need a universal db model variable. Only using the one model (Workout).
const Workout = require("../models/workout.js");

// Gets all workouts.
router.get("/api/workouts", (req, res) => {
	Workout.find()
		.then((allWorkouts) => {
			res.json(allWorkouts);
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

// This endpoint is hit when adding an exercise to a new workout AND to the last workout. Pushes the new exercise object to the array of exercises in the Workout model. The workout is targeted by object id.
router.put("/api/workouts/:id", (req, res) => {
	Workout.updateOne(
		{ _id: req.params.id },
		{ $push: { exercises: req.body } },
		{ new: true }
	)
		.then((newExercise) => {
			console.log(newExercise);
			res.json(newExercise);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

// Gets all workouts for the stats page. Front end handles the graphing.
router.get("/api/workouts/range", (req, res) => {
	Workout.find()
		.then((allWorkouts) => {
			res.json(allWorkouts);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

module.exports = router;
