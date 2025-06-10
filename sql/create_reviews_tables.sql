CREATE TABLE reviews (
    checkInDate DATE,
    checkOutDate DATE,
    
    dislikedText TEXT,




    
    hotelId TEXT,



    "StaffScore" REAL,
    Facilities REAL,
    Cleanliness REAL,
    Comfort REAL,
    "ValueForMoney" REAL,
    Location REAL,
    "FreeWifi" REAL,



    id TEXT PRIMARY KEY,
    
    likedText TEXT,

    
    numberOfNights INTEGER,
    
    rating REAL,

    
    reviewLanguage VARCHAR(10),



    reviewTitle TEXT,
    stayRoomId TEXT,
    
    
    
    
    
    
    travelerType VARCHAR(100),
    userLocation VARCHAR(255),
    userName VARCHAR(255)
);
