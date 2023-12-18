const db = require('../models/connection');

const table = 'difficulty'

function getAll() {
    return db.get(table);
}

module.exports = {
    getAll
};