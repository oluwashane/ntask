module.exports = (sequelize, DataTaype) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataTaype.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTaype.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type:DataTaype.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type:DataTaype.STRING,
      unique: true, //Ensure email is not repeated
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
    }, {
      classMethods: {
        associate: (models) => {
          Users.hasMany(models.Tasks);
        }
    }
  });
  return Users;
};