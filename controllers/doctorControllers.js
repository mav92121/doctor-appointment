import Doctor from "../models/doctorModel.js";
export const getAllDoctors = async (req, res) => {
  const doctors = await Doctor.find({});
  return res.send(doctors);
};
