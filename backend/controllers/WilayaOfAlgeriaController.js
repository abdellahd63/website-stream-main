const Willaya = require('../models/WilayaOfAlgeriaModel');

const GetWillaya = async (req, res) => {
  try {
    const Willayas = await Willaya.findAll();
      if (Willayas.length > 0) {
        res.status(200).json(Willayas);
      }else{
        res.status(400).json({message: 'No Willayas found'});
      }
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting panne');
  }
}

module.exports = {
    GetWillaya,
}