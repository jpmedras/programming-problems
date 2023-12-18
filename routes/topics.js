const db = require('../models/connection');

const topics = db.get('topic');

function getAll() {
    return topics;
}

module.exports = {
    getAll
};