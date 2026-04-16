const db = require('../config/db');

const addSchool = async (name, address, latitude, longitude) => {
  const [result] = await db.execute(
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
    [name, address, latitude, longitude]
  );
  return result;
};

const getAllSchools = async () => {
  const [rows] = await db.execute("SELECT * FROM schools");
  return rows;
};

module.exports = { addSchool, getAllSchools };  // ✅ CRITICAL