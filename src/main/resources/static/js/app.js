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
        if (!data || data.length == 0) {
          alert("Author not found");
          return;
        }
        const authorBlueprintsElement =
          document.getElementById("author-blueprints");
        authorBlueprintsElement.textContent = `${author}'s blueprints:`;
        blueprints = mapBlueprints(data);
        $("table tbody").empty();
        blueprints.map(function (bp) {
          $("table tbody").append(
            `<tr>
                            <td>${bp.name}</td>
                            <td>${bp.points}</td>
                            <td></td>
                        </tr>`
          );
        });
        var total = blueprints.reduce(function (acc, bp) {
          return acc + bp.points;
        }, 0);
        const totalPointsElement = document.getElementById("total-points");
        totalPointsElement.textContent = `Total user points: ${total}`;
      });
    },
  };
})();
