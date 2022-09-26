import countriesService from "../../../services/countries/countries.service"
import emissionsService from "../../../services/emissions/emissions.service";
import normalize from "../../../helper/normalize";

export async function getData() {
    const countries = await countriesService();
    const countryCodes = countries.map(country => country.countryCode);
    let emissions = await emissionsService(countryCodes)
    const sanitizeData = await normalize(emissions);

    return sanitizeData;

}

export default async function handler(req, res) {
    const jsonData = await getData()
    res.status(200).json(jsonData)
}
