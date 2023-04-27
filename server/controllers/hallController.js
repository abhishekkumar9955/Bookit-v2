const Hall = require('../model/hallSchema');

const createHall = async (req, res, next) => {
  try {
    const { name, location, capacity } = req.body;
    const hall = new Hall({ name, location, capacity });
    await hall.save();
    res.status(201).json({ message: 'Hall created successfully' });
  } catch (error) {
    next(error);
  }
};

const getHalls = async (req, res, next) => {
  try {
    const halls = await Hall.find();
    res.json({ halls });
  } catch (error) {
    next(error);
  }
};

const getHallById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const hall = await Hall.findById(id);
    if (!hall) {
      return res.status(404).json({ message: 'Hall not found' });
    }
    res.json({ hall });
  } catch (error) {
    next(error);
  }
};

const updateHall = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, location, capacity } = req.body;
    const hall = await Hall.findByIdAndUpdate(id, { name, location, capacity }, { new: true });
    if (!hall) {
      return res.status(404).json({ message: 'Hall not found' });
    }
    res.json({ hall });
  } catch (error) {
    next(error);
  }
};

const deleteHall = async (req, res, next) => {
  try {
    const { id } = req.params;
    const hall = await Hall.findByIdAndDelete(id);
    if (!hall) {
      return res.status(404).json({ message: 'Hall not found' });
    }
    res.json({ message: 'Hall deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { createHall, getHalls, getHallById, updateHall, deleteHall };