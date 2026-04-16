const schoolModel = require('../models/schoolmodel');

const addSchoolService = async (data) => {
  return await schoolModel.addSchool(
    data.name,
    data.address,
    data.latitude,
    data.longitude
  );
};

const getSchoolsSorted = async (userLat, userLon) => {
  const schools = await schoolModel.getAllSchools();

  return schools.map(school => {
    const R = 6371;
    const dLat = (school.latitude - userLat) * Math.PI / 180;
    const dLon = (school.longitude - userLon) * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(userLat * Math.PI / 180) *
      Math.cos(school.latitude * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    return { ...school, distance };
  }).sort((a, b) => a.distance - b.distance);
};

module.exports = { addSchoolService, getSchoolsSorted };  // ✅ MUST BE PRESENT