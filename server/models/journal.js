'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class journal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      journal.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "userId",
        },
      })

      journal.hasMany(models.bookmark, {
        as: "journal",
        foreignKey: {
          name: "journalId",
        },
      })
    }
  };
  journal.init({
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'journal',
  });
  return journal;
};