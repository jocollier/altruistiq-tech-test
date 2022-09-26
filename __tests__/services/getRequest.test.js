import getRequest from "../../services/abstractRequest/getRequest.service";
import axios from "axios";

jest.mock("axios");

describe("Makes an axios request", () => {
    test("it should modify the getRequest", async () => {
        const res = [{ "shortName": "Armenia", "countryCode": "1", "countryName": "Armenia", "isoa2": "AM", "score": "3A" }, { "shortName": "Afghanistan", "countryCode": "2", "countryName": "Afghanistan", "isoa2": "AF", "score": "3A" }]
        axios.get.mockResolvedValueOnce(res);

        const result = await getRequest('https://api.footprintnetwork.org/v1/countries');

        expect(axios.get).toHaveBeenCalledWith('https://api.footprintnetwork.org/v1/countries', { "auth": { "password": undefined, "username": "any-user-name" } });
        expect(result).toEqual(res);
    });
});

