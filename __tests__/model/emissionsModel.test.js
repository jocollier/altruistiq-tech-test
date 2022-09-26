import emissionModel from "../../model/emissionModel"


describe("Test for emissions model", () => {
    test("it should modify the getRequest", async () => {
        let modelData = [1, 2, 3, 4, 5]
        let model = new emissionModel(modelData);

        let getCountriesSpy = jest.spyOn(model, 'getCountries').mockImplementation(() => 'Hello');
        let getDataForCountrySpy = jest.spyOn(model, 'getDataForCountry').mockImplementation(() => 'Goodbye');

        expect(model).toHaveProperty("globalCountryCodes", modelData);
        expect(model.getCountries()).toBe("Hello");
        expect(model.getDataForCountry()).toBe("Goodbye");


        getCountriesSpy.mockRestore();
        getDataForCountrySpy.mockRestore();
    });
});

