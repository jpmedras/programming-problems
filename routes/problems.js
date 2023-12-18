const db = require('../models/connection');

const table = 'problem'
const problems = db.get(table);


function getAll() {
    return problems;
}

function create(problem) {
    return db.insert(table, problem);
}

module.exports = {
    getAll,
    create
};