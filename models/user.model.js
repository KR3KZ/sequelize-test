const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	const User = sequelize.define("user", {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		test: {
			type: DataTypes.STRING,
		},
		lastName: {
			type: DataTypes.STRING,
		},
	});
	// User.sync(); This creates the table if it doesn't exist (and does nothing if it already exists)
	// User.sync({ force: true }); This creates the table, dropping it first if it already existed
	// User.sync({ alter: true }); This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
};
