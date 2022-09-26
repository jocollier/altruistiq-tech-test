import getRequest from '../services/abstractRequest/getRequest.service'

export default class countryModel {
  constructor() {
  }

  async getCountries() {
    const resp = await getRequest('https://api.footprintnetwork.org/v1/countries')
    return resp.data
  }
}

// do i need a get/setter