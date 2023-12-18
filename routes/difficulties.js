const db = require('../models/connection');

const difficulties = db.get('difficulty');

function getAll() {
    return difficulties;
}


module.exports = {
    getAll
};