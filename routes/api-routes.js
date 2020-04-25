const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
	console.log(body);
	Workout.create(body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put("/api/workouts/:id", (req, res) => {
	db.Workout.updateOne({ _id: req.params.id }, {});
});

module.exports = router;

/***
 *
 *I need to target the correct workout by id and push a new exercise (object) to the exercises array in the workout model.
 */
