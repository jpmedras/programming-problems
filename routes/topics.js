const db = require('../models/connection');

const table = 'topic'

function getAll() {
    return db.get(table);
}

function create(topic) {
    return db.insert(table, topic);
}

module.exports = {
    getAll,
    create
};