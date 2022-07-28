const pool = require('../utils/pool');

module.exports = class Animal {
  id;
  name;
  type;
  gender;
  voice;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.gender = row.gender;
    this.voice = row.voice;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM animals;');
    return rows.map((row) => new Animal(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM animals WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Animal(rows[0]);
  }
};
