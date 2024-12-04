module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define('photo', {
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      altDescription: {
        type: DataTypes.STRING,
      },
      dateSaved: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users', 
          key: 'id',
        },
        allowNull: false,
      },
    }, {
      timestamps: true,
    });
  
    return Photo;
  };
  