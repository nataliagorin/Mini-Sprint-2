import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Region = sequelize.define('Region', {
  PropertyStateProvinceID: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  PropertyStateProvinceName: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'regions',
  timestamps: false
});

export default Region;
