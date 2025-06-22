const { data } = require('./commandController');

const getMessage = (req, res) => {
  res.json({ message: data.message || 'No hay mensaje aún' });
};

module.exports = { getMessage };
