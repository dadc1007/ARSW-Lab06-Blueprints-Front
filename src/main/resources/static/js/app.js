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
                $("table tbody").empty();
                blueprints.map(function (bp) {
                    $("table tbody").append(
                        `<tr>
                            <td>${bp.name}</td>
                            <td>${bp.points}</td>
                            <td><button type="button" class="btn btn-primary btn-sm">Open</button></td>
                        </tr>`
                    );
                });
                var total = blueprints.reduce(function (acc, bp) {
                    return acc + bp.points;
                }, 0);
                $("p").text("Total user points: " + total);
            });
        },
    };
})();
