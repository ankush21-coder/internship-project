const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const seedProducts = require('./seeder');

require('dotenv').config();

const app = express();

const startServer = async () => {
  await connectDB();
  await seedProducts();

  app.use(cors());
  app.use(express.json());

  app.use('/api/auth', require('./routes/authRoutes'));
  app.use('/api/products', require('./routes/productRoutes'));
  app.use('/api/cart', require('./routes/cartRoutes'));
  app.use('/api/orders', require('./routes/orderRoutes'));
  app.use('/api/users', require('./routes/userRoutes'));
  app.use('/api/reviews', require('./routes/reviewRoutes'));
  app.use('/api/wishlist', require('./routes/wishlistRoutes'));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

startServer();
