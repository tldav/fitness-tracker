const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	day: {
		type: Date,
		default: new Date()
	},
	exercises: [
		{
			type: {
				type: String,
				required: true,
				enum: ["resistance", "cardio"]
			},
			name: {
				type: String,
				required: true,
				minlength: 1,
				maxlength: 30
			},
			duration: {
				type: Number,
				trim: true,
				min: 1,
				max: 1000
			},
			weight: {
				type: Number,
				trim: true,
				min: 1,
				max: 1000
			},
			reps: {
				type: Number,
				trim: true,
				min: 1,
				max: 1000
			},
			sets: {
				type: Number,
				trim: true,
				min: 1,
				max: 1000
			},
			distance: {
				type: Number,
				trim: true,
				min: 1,
				max: 1000
			}
		}
	]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
