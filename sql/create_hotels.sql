CREATE TABLE "hotels" (
	"GlobalPropertyID" VARCHAR PRIMARY KEY,
	"SourcePropertyID" VARCHAR(150),
	"GlobalPropertyName" VARCHAR(300),
	"GlobalChainCode" VARCHAR(500),
	"PropertyAddress1" TEXT,
	"PropertyAddress2" TEXT,
	"PrimaryAirportCode" VARCHAR(500),
	"CityID" INTEGER REFERENCES "cities"("CityID"),
	"PropertyStateProvinceID" INTEGER REFERENCES "regions"("PropertyStateProvinceID"),
	"PropertyZipPostal" VARCHAR(200),
	"PropertyPhoneNumber" VARCHAR(200),
	"PropertyFaxNumber" VARCHAR(200),
	"SabrePropertyRating" VARCHAR(100),
	"PropertyLatitude" VARCHAR(500),
	"PropertyLongitude" VARCHAR(500),
	"SourceGroupCode" VARCHAR(100)
);