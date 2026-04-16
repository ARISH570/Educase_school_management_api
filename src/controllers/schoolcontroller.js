const schoolService = require('../services/schoolservice');

const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ message: "All fields required" });
  }

  await schoolService.addSchoolService({ name, address, latitude, longitude });

  res.status(201).json({ message: "School added successfully" });
};

const listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: "Latitude and Longitude required" });
  }

  const schools = await schoolService.getSchoolsSorted(
    parseFloat(latitude),
    parseFloat(longitude)
  );

  res.json(schools);
};

module.exports = { addSchool, listSchools };  // ✅ THIS LINE IS CRITICAL