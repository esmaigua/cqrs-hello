let data = { message: '' }; // Estado simulado en memoria

const saveMessage = (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  data.message = message;
  res.json({ status: 'Mensaje recibido con éxito' });
};

module.exports = { saveMessage, data };
