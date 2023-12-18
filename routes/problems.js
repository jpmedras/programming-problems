const db = require('../models/connection');

const table = 'problem'

function getAll() {
    return db.get(table);
}

function create(problem) {
    return db.insert(table, problem);
}

module.exports = {
    getAll,
    create
};