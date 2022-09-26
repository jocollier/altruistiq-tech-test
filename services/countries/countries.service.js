import countryModel from "../../model/countryModel";

export default async function countriesService() {
    const countryModelInstance = new countryModel();
    return countryModelInstance.getCountries();
}