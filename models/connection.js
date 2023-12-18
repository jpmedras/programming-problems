const sqlite3 = require("sqlite3").verbose();

class Database {
    constructor(db_name) {
        this.db = new sqlite3.Database("./models/" + db_name);
    }

    async get(table) {
        try {
            return await new Promise((resolve, reject) => {
                const query = `SELECT * FROM ${table};`;
                this.db.all(query, [], (erro, rows) => {
                    if (erro) {
                        reject(erro);
                    } else {
                        resolve(rows);
                    }
                });
            });
        } catch (erro) {
            console.error("Erro:", erro.message);
            throw erro;
        }
    }

    async insert(table, data) {
        try {
            return await new Promise((resolve, reject) => {
                const fields = Object.keys(data).toString().replaceAll(',', ', ');
                const values = '?,'.repeat(Object.keys(data).length).slice(0, -1).replaceAll(',', ', ');
                const query = `INSERT INTO ${table} (${fields}) VALUES (${values});`;

                const params = Object.values(data);
                
                this.db.run(query, params, (erro) => {
                    if (erro) {
                        reject(erro);
                    } else {
                        resolve(true);
                    }
                });
            });
        } catch (erro) {
            console.error("Erro:", erro.message);
            throw erro;
        }
    }
}

module.exports = new Database("data.db");