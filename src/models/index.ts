import City from './City';
import Region from './Region';
import Hotel from './Hotel';

City.hasMany(Hotel, { foreignKey: 'CityID' });
Region.hasMany(Hotel, { foreignKey: 'PropertyStateProvinceID' });

Hotel.belongsTo(City, { foreignKey: 'CityID' });
Hotel.belongsTo(Region, { foreignKey: 'PropertyStateProvinceID' });

export { City, Region, Hotel };
