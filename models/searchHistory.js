module.exports = (sequelize, DataTypes) => {
    const SearchHistory = sequelize.define('searchHistory', {
      query: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users', 
          key: 'id',
        },
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, {
      timestamps: true,
    });
  
    return SearchHistory;
  };
  