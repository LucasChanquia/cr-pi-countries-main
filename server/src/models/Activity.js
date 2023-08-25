const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Activity',{
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.ENUM('Trekking', 'Walks', 'Bike Tour', 'City Tour', 'Gastronomic Circuit', 'Rapel', 'Shopping', 'Museum Circuit', 'Free Choice'),
            allowNull: false,
          },
        difficulty: {
            type: DataTypes.ENUM('1 (Null difficulty)', '2 (Low difficulty)', '3 (Medium difficulty)', '4 (High difficulty)', '5 (Extreme difficulty)'),
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM('Spring', 'Autumn', 'Winter' , 'Summer'),
            allowNull: false,
        }
    },{timestamps: false})
}