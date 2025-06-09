import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class City extends Model {}

City.init({
  CityID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
  },
  CityName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'City',
  tableName: 'cities',
  timestamps: false,
});

export default City;
