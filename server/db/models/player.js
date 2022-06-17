'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Player.init({
    player_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    player_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    position: DataTypes.STRING,
    country: DataTypes.STRING,
    salary_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Player',
    tableName: 'player',
    timestamps: false
  });

  Player.removeAttribute('id');
  return Player;
};
