import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  // get all countries
  const getAllCountries = () => formattedCountries;

  // to get a particular country
  const getByValue = (value) => {
    return formattedCountries.find((item) => item.value === value);
  };

  return {
    getAllCountries,
    getByValue,
  };
};

export default useCountries;
