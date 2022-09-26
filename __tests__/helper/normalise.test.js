import normalize from "../../helper/normalize"

describe("Testing normalise function", () => {
    // test stuff
    test("it should modify the getRequest", async () => {

        const ukData = [[
            {
                "year": 1961,
                "shortName": "United Kingdom",
                "countryCode": 229,
                "countryName": "United Kingdom",
                "isoa2": "GB",
                "record": "EFConsPerCap",
                "cropLand": 0.832349441907109,
                "grazingLand": 0.740714565041304,
                "forestLand": 0.295993361479807,
                "fishingGround": 0.391445375652822,
                "builtupLand": 0.06689581752301,
                "carbon": 3.81380127656807,
                "score": "3A",
                "value": 6.14119983817212
            }]]

        const normalisedData = await normalize(ukData);

        expect(normalisedData).toEqual({
            '1961': { total: 3.81380127656807, countries: [{ country: 'United Kingdom', value: 3.81380127656807 }] }
        })

    });
});