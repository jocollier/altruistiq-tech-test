import getRequest from '../services/abstractRequest/getRequest.service'

export default class emissionsModel {
  constructor(globalCountryCodes) {
    this.globalCountryCodes = globalCountryCodes;
  }

  async getCountries() {
    const countryPromises = this.globalCountryCodes.map(countryCode => this.getDataForCountry(countryCode));
    const emissionData = await Promise.all(countryPromises);

    return emissionData;
  }

  async getDataForCountry(countryCode) {
    const resp = await getRequest(`https://api.footprintnetwork.org/v1/data/${countryCode}/all/EFCpc`)
    return resp.data
  }
}
