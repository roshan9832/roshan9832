const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/body_measurement_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  userId: String,
  measurements: Map,
});

const User = mongoose.model('User', userSchema);

app.post('/save-measurements', async (req, res) => {
  const { userId, measurements } = req.body;

  const user = new User({ userId, measurements });
  await user.save();

  res.status(200).json({ message: 'Measurements saved successfully' });
});
