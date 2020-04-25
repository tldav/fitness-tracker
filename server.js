const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

mongoose.connect(
	process.env.MONGODB_URI ||
		"mongodb://user:password@ds153096.mlab.com:53096/heroku_nhrjdkmm",
	{
		useNewUrlParser: true,
		useFindAndModify: false
	}
);

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
