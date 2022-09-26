import countriesService from "../../../services/countries/countries.service"
import emissionsService from "../../../services/emissions/emissions.service";

export async function getData() {
    const countries = await countriesService();
    const countryCodes = countries.map(country => country.countryCode);
    // const emissions = await emissionsService(countryCodes)

    return countries;
}

export default async function handler(req, res) {
    const jsonData = await getData()
    res.status(200).json(jsonData)
}
