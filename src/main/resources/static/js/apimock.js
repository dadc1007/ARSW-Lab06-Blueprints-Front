var apimock = (function () {
    var mockdata = [];
    mockdata["juan"] = [
        {
            author: "juan",
            name: "house",
            points: [
                { x: 40, y: 40 },
                { x: 60, y: 60 },
                { x: 40, y: 60 },
                { x: 60, y: 40 },
            ],
        },
        {
            author: "juan",
            name: "car",
            points: [
                { x: 100, y: 100 },
                { x: 150, y: 120 },
                { x: 200, y: 100 },
                { x: 180, y: 80 },
            ],
        },
    ];

    mockdata["ana"] = [
        {
            author: "ana",
            name: "sketch1",
            points: [
                { x: 20, y: 30 },
                { x: 40, y: 90 },
                { x: 100, y: 120 },
            ],
        },
        {
            author: "ana",
            name: "sketch2",
            points: [
                { x: 200, y: 200 },
                { x: 250, y: 250 },
                { x: 300, y: 200 },
                { x: 250, y: 150 },
            ],
        },
    ];
    return {
        getBlueprintsByAuthor: function (author, callback) {
            callback(mockdata[author]);
        },
        getBlueprintsByNameAndAuthor: function (author, name, callback) {
            callback(
                mockdata[author].find(function (bp) {
                    return bp.name === name;
                })
            );
        },
    };
})();
