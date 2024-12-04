module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('tag', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      photoId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'photos',
          key: 'id',
        },
        allowNull: false,
      },
    }, {
      timestamps: true,
    });
  
    return Tag;
  };
  