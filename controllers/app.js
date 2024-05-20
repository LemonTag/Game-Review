const express = require('express');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes');
const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const session = require('express-session');

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

app.use('/api', gameRoutes);
app.use('/api', authRoutes);
app.use('/api', reviewRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
