async function getDatalib(path, name) {
    let filepath = "../test-data/" + process.env.BU + "-" + process.env.ENV + "/" + path + "/" + name + ".json";
    return JSON.parse(JSON.stringify(require(filepath)));
}

module.exports = {
    getDatalib
};