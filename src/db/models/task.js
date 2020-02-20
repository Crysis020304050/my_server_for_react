'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define( 'Task', {
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      }
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    files: DataTypes.ARRAY( DataTypes.STRING )
  }, {} );
  Task.associate = function (models) {
    Task.belongsTo( models.User, {
      targetKey: 'id',
      foreignKey: 'userId',
    } );
  };
  return Task;
};