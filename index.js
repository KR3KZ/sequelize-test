const { Sequelize } = require("sequelize");
const express = require("express");
const app = express();

const sequelize = new Sequelize("login-register-db", "root", "", {
	dialect: "mariadb",
});

sequelize
	.authenticate()
	.then((result) => {
		console.log("Connection to DB established.");
		app.listen(3000);
	})
	.catch((err) => {
		console.log(err);
	});

const modelDefiners = [require("./models/user.model.js")];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

module.exports = sequelize;
