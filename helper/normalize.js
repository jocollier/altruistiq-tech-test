export default async function normalize(data) {
    let globalEmissions = {}
    data.forEach((i, index) => {
        data[index].filter(function (obj, index) {
            if (obj.hasOwnProperty('carbon')) {
                if (globalEmissions.hasOwnProperty(obj.year)) {
                    globalEmissions[obj.year]['total'] += obj.carbon;
                    globalEmissions[obj.year]['countries'].push({ country: obj.countryName, value: obj.carbon })
                } else {
                    globalEmissions[obj.year] = {
                        total: obj.carbon,
                        countries: [
                            { country: obj.countryName, value: obj.carbon }
                        ]
                    }
                }
            }
        });
    })

    Object.entries(globalEmissions).forEach(([key, value], index) => {
        let objs = Object.values(globalEmissions)[index]['countries']

        objs.sort((a, b) => a.value < b.value ? 1 : -1)

        var result = objs.reduce((unique, o) => {
            if (!unique.some(obj => obj.country === o.country && obj.value === o.value)) {
                unique.push(o);
            }
            return unique;
        }, []);

        let top = 5
        let laste = result.length - 1
        result.splice(top, laste - top);


        Object.values(globalEmissions)[index]['countries'] = result

    })

    return globalEmissions;
}