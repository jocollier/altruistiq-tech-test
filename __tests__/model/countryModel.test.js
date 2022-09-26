import countryModel from '../../model/countryModel';

describe("Test for country model", () => {
    test("it should modify the getRequest", async () => {
        let model = new countryModel();
        let spy = jest.spyOn(model, 'getCountries').mockImplementation(() => 'Hello');

        expect(model.getCountries()).toBe("Hello");
        spy.mockRestore();
    });
});

