import { ICountry, ICountryList } from "../types";

export const transformCountries = (countries: ICountryList[]): ICountry[] =>
  countries.map((country) => ({
    flag: country.flags.svg,
    name: country.name.common,
    capital: country.capital[0],
    region: country.region,
    area: country.area,
    population: country.population,
  }));