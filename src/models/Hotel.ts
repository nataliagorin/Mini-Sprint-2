import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Hotel extends Model {}

Hotel.init({
  GlobalPropertyID: {
    type: DataTypes.STRING,
    primaryKey: true,
    field: 'GlobalPropertyID'
  },
  SourcePropertyID: {
    type: DataTypes.STRING,
    field: 'SourcePropertyID'
  },
  GlobalPropertyName: {
    type: DataTypes.STRING,
    field: 'GlobalPropertyName'
  },
  GlobalChainCode: {
    type: DataTypes.STRING,
    field: 'GlobalChainCode'
  },
  PropertyAddress1: {
    type: DataTypes.STRING,
    field: 'PropertyAddress1'
  },
  PropertyAddress2: {
    type: DataTypes.STRING,
    field: 'PropertyAddress2'
  },
  PrimaryAirportCode: {
    type: DataTypes.STRING,
    field: 'PrimaryAirportCode'
  },
  CityID: {
    type: DataTypes.INTEGER,
    field: 'CityID'
  },
  PropertyStateProvinceID: {
    type: DataTypes.INTEGER,
    field: 'PropertyStateProvinceID'
  },
  PropertyZipPostal: {
    type: DataTypes.STRING,
    field: 'PropertyZipPostal'
  },
  PropertyPhoneNumber: {
    type: DataTypes.STRING,
    field: 'PropertyPhoneNumber'
  },
  PropertyFaxNumber: {
    type: DataTypes.STRING,
    field: 'PropertyFaxNumber'
  },
  SabrePropertyRating: {
    type: DataTypes.STRING,
    field: 'SabrePropertyRating'
  },
  PropertyLatitude: {
    type: DataTypes.STRING,
    field: 'PropertyLatitude'
  },
  PropertyLongitude: {
    type: DataTypes.STRING,
    field: 'PropertyLongitude'
  },
  SourceGroupCode: {
    type: DataTypes.STRING,
    field: 'SourceGroupCode'
  }
}, {
  sequelize,
  modelName: 'Hotel',
  tableName: 'hotels',
  timestamps: false,
});

export default Hotel;
