CREATE TABLE Countries (
	GlobalPropertyID INTEGER PRIMARY KEY,
	SourcePropertyID VARCHAR(150),
	GlobalPropertyName VARCHAR(300),
	GlobalChainCode VARCHAR(50),
	PropertyAddress1 TEXT,
	PropertyAddress2 TEXT,
	PrimaryAirportCode VARCHAR(50),
	CityID INTEGER REFERENCES Cities(CityID),
	PropertyStateProvinceID INTEGER REFERENCES Regions(PropertyStateProvinceID),
	PropertyZipPostal VARCHAR(20),
	PropertyPhoneNumber VARCHAR(20),
	PropertyFaxNumber VARCHAR(20),
	SabrePropertyRating DECIMAL(3,1),
	PropertyLatitude DECIMAL(9,6),
	PropertyLongitude DECIMAL(9,6),
	SourceGroupCode VARCHAR(10)
);