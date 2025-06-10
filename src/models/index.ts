import City from './City';
import Region from './Region';
import Hotel from './Hotel';
import Review from './Review';

City.hasMany(Hotel, { foreignKey: 'CityID' });
Region.hasMany(Hotel, { foreignKey: 'PropertyStateProvinceID' });

Hotel.belongsTo(City, { foreignKey: 'CityID' });
Hotel.belongsTo(Region, { foreignKey: 'PropertyStateProvinceID' });

// Review model associations
Hotel.hasMany(Review, { foreignKey: 'HotelID' });
Review.belongsTo(Hotel, { foreignKey: 'HotelID' });


export { City, Region, Hotel, Review };