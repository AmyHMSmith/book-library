const { Reader } = require('../models');

const createReader = async (req, res) => {
  const newReader = await Reader.create(req.body);
  res.status(201).json(newReader);
};

const getAllReaders = async (req, res) => {
    const allReaders = await Reader.findAll();
    res.status(200).json(allReaders);
  };

  const getReaderbyId = async (req, res) => {
    const { id } = req.params;
    const reader = await Reader.findByPk(id);

    if (!reader) {
        return res.status(404).json({ error: `The reader ${id} could not be found.` });
      }

    res.status(200).json(reader);
  };

  const updateReader = async (req, res) => {
    const { id } = req.params;
    const [ affectedCount ] = await Reader.update(req.body, { where: { id: id } });
   
    if (affectedCount === 0) {
        return res.status(404).json({ error: `The reader ${id} could not be found.` });
      }

    res.status(200).json(affectedCount);
  };

  const deleteReader = async (req, res) => {
    const { id } = req.params;
  
    const reader = await Reader.destroy({ where: { id: id } })
 
    if (!reader) {
        return res.status(404).json({ error: `The reader ${id} could not be found.` });
      }

    res.status(204).json(reader);
  };

  module.exports = { createReader, getAllReaders, getReaderbyId, updateReader, deleteReader };