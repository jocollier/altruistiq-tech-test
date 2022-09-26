import index from '../../../pages/api/countries/index'
// jest.mock("../../pages/api/countries/index");

describe("Testing the countries api page", () => {
    test("it should return status 200 & Json  ", async () => {
        const getData = jest.fn(() => {
            return {}
        });

        const req = {}
        const json = jest.fn();
        const status = jest.fn(() => {
            return {
                json
            }
        })
        const res = {
            status
        }


    });
});
