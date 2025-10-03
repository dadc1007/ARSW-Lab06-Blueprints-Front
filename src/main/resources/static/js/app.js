var app = (function () {
    var selectedAuthor = null;
    var blueprints = [];
    function mapBlueprints(list) {
        return list.map(function (bp) {
            return {
                name: bp.name,
                points: bp.points.length,
            };
        });
    }
    return {
        setAuthor: function (author) {
            selectedAuthor = author;
        },
        getAuthor: function () {
            return selectedAuthor;
        },
        loadBlueprints: function (author) {
            apimock.getBlueprintsByAuthor(author, function (data) {
                blueprints = mapBlueprints(data);
                console.log("Blueprints cargados:", blueprints);
            });
        },
        getBlueprints: function () {
            return blueprints;
        },
    };
})();
