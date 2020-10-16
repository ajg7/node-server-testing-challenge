const db = require("../data/config");

module.exports = {
    find,
    add,
    remove
};

function find() {
    return db("Nintendo_Characters");
}

function add(newCharacter) {
    return db("Nintendo_Characters").insert(newCharacter);
}

function remove(id) {
    return db("Nintendo_Characters").where({ id }).delete();
}