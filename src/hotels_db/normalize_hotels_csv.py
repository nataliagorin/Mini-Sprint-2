import pandas as pd
import csv

# 1. Citește fișierul CSV sursă
df = pd.read_csv(
    "All CSL Properties with Global Ids and GDS Ids (Active)_Jun25_1.csv",
    encoding='utf-16',
    delimiter='\t',
    on_bad_lines='skip'
)

# -------------------
# REGIONS TABLE
# -------------------
regions_df = df[["Property State/Province"]].drop_duplicates().reset_index(drop=True)
regions_df["PropertyStateProvinceID"] = regions_df.index + 1
regions_df = regions_df.rename(columns={"Property State/Province": "PropertyStateProvinceName"})
regions_df = regions_df[["PropertyStateProvinceID", "PropertyStateProvinceName"]]
regions_df.to_csv("regions.csv", index=False, quoting=csv.QUOTE_MINIMAL)

# -------------------
# CITIES TABLE
# -------------------
cities_df = df[["Property City Name", "Property Country Code"]].drop_duplicates().reset_index(drop=True)
cities_df["CityID"] = cities_df.index + 1
cities_df = cities_df.rename(columns={
    "Property City Name": "CityName",
    "Property Country Code": "Country"
})
cities_df = cities_df[["CityID", "CityName", "Country"]]
cities_df.to_csv("cities.csv", index=False, quoting=csv.QUOTE_MINIMAL)

# -------------------
# COUNTRIES TABLE (hoteluri)
hotels_df = df.copy()

# Alocăm FK pentru CityID și PropertyStateProvinceID
hotels_df = hotels_df.merge(
    cities_df,
    how="left",
    left_on=["Property City Name", "Property Country Code"],
    right_on=["CityName", "Country"]
)

hotels_df = hotels_df.merge(
    regions_df,
    how="left",
    left_on="Property State/Province",
    right_on="PropertyStateProvinceName"
)

# Selectăm doar coloanele din schema countries
countries_df = hotels_df[[
    "Global Property ID", "Source Property ID", "Global Property Name", "Global Chain Code",
    "Property Address 1", "Property Address 2", "Primary Airport Code",
    "CityID", "PropertyStateProvinceID", "Property Zip/Postal", "Property Phone Number",
    "Property Fax Number", "Sabre Property Rating", "Property Latitude",
    "Property Longitude", "Source Group Code"
]]

# Redenumim coloanele
countries_df = countries_df.rename(columns={
    "Global Property ID": "GlobalPropertyID",
    "Source Property ID": "SourcePropertyID",
    "Global Property Name": "GlobalPropertyName",
    "Global Chain Code": "GlobalChainCode",
    "Property Address 1": "PropertyAddress1",
    "Property Address 2": "PropertyAddress2",
    "Primary Airport Code": "PrimaryAirportCode",
    "Property Zip/Postal": "PropertyZipPostal",
    "Property Phone Number": "PropertyPhoneNumber",
    "Property Fax Number": "PropertyFaxNumber",
    "Sabre Property Rating": "SabrePropertyRating",
    "Property Latitude": "PropertyLatitude",
    "Property Longitude": "PropertyLongitude",
    "Source Group Code": "SourceGroupCode"
})

# Înlocuiește NaN cu stringuri goale (pentru a evita erorile de import)
for col in ["PropertyLatitude", "PropertyLongitude", "SabrePropertyRating"]:
    countries_df[col] = countries_df[col].apply(lambda x: x if pd.notnull(x) else '')

countries_df.to_csv(
    "countries.csv",
    index=False,
    quoting=csv.QUOTE_MINIMAL,
    na_rep=''  # fără NULL sau "", doar câmp gol
)

print("✅ CSV-urile 'regions.csv', 'cities.csv' și 'countries.csv' au fost regenerate cu succes.")
