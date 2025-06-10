import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    hotelId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stayRoomId: {
      type: DataTypes.STRING,
    },
    checkInDate: {
      type: DataTypes.DATEONLY,
    },
    checkOutDate: {
      type: DataTypes.DATEONLY,
    },
    likedText: {
      type: DataTypes.TEXT,
    },
    dislikedText: {
      type: DataTypes.TEXT,
    },
    reviewTitle: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    StaffScore: {
      type: DataTypes.FLOAT,
      field: 'Staff score',
    },
    Facilities: {
      type: DataTypes.FLOAT,
    },
    Cleanliness: {
      type: DataTypes.FLOAT,
    },
    Comfort: {
      type: DataTypes.FLOAT,
    },
    ValueForMoney: {
      type: DataTypes.FLOAT,
      field: 'Value for money',
    },
    Location: {
      type: DataTypes.FLOAT,
    },
    FreeWifi: {
      type: DataTypes.FLOAT,
      field: 'Free Wifi',
    },
    numberOfNights: {
      type: DataTypes.INTEGER,
    },
    reviewLanguage: {
      type: DataTypes.STRING(10),
    },
    travelerType: {
      type: DataTypes.STRING,
    },
    userLocation: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews',
    timestamps: false,
  }
);

export default Review;
