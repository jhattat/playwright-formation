async function recupBonneDatalib(nomdeladatalib) {
    var bu = process.env.BU;
    var env = process.env.ENV;

    var path = "../test-data/" + bu + "-" + env + "/" + nomdeladatalib + ".json";

    var contenuDuJson = JSON.parse(JSON.stringify(require(path)));

    return contenuDuJson;
}

module.exports = {
    recupBonneDatalib
};