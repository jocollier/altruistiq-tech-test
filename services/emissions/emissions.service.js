import emissionsModel from "../../model/emissionModel";
import normalize from "../../helper/normalize";


export default async function emissionsService(countryCodes) {
    const emissionsModelInstance = new emissionsModel(countryCodes);
    const emissionData = await emissionsModelInstance.getCountries();

    return emissionData;
}
